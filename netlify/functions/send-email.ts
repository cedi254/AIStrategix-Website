import type { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Missing RESEND_API_KEY' })
        };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const { name, email, 'project-type': projectType, message } = body;

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            };
        }

        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: 'AI Strategix Contact <onboarding@resend.dev>', // User should update this after domain verification
            to: ['cedric@admyre.ch', 'info@aistrategix.ch'],
            subject: `Neue Kontaktanfrage: ${projectType}`,
            html: `
        <h2>Neue Anfrage über das Kontaktformular</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Projekttyp:</strong> ${projectType}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `
        });

        if (error) {
            console.error('Resend error:', error);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.message })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully', data })
        };

    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

export { handler };
