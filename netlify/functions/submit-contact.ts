import { Handler } from '@netlify/functions';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import * as dotenv from 'dotenv';
import path from 'path';

// Explicitly load .env from project root
const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

// Explicitly load .env from project root
const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, projectType, message } = JSON.parse(event.body || '{}');

        if (!name || !email || !message) {
            return { statusCode: 400, body: 'Missing required fields' };
        }

        // 1. Save to Neon Database
        if (process.env.DATABASE_URL) {
            const sql = neon(process.env.DATABASE_URL);
            await sql`
        INSERT INTO contacts (name, email, project_type, message)
        VALUES (${name}, ${email}, ${projectType}, ${message})
      `;
        } else {
            console.warn('DATABASE_URL not set, skipping DB save');
        }

        // 2. Send Email via Resend
        if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
            const resend = new Resend(process.env.RESEND_API_KEY);

            const { data, error } = await resend.emails.send({
                from: 'N8N Consulting <onboarding@resend.dev>', // Default Resend testing domain, user should update if they have a domain
                to: process.env.ADMIN_EMAIL,
                subject: `Neue Projektanfrage: ${projectType}`,
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #ea4c3b;">Neue Anfrage von ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Projekttyp:</strong> ${projectType}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `
            });

            if (error) {
                console.error('Resend Error:', error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Failed to send email', details: error }),
                };
            }

            console.log('Email sent successfully:', data);
        } else {
            console.warn('RESEND_API_KEY or ADMIN_EMAIL not set, skipping email');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success' }),
        };
    } catch (error) {
        console.error('Error processing request:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};

export { handler };
