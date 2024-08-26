import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { envs } from './envs'; // Asegúrate de que envs.ts está configurado correctamente

// Configura Mailgun
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
    username: 'api',
    key: envs.MAILGUN_API_KEY, // Obtén la clave API desde las variables de entorno
});

// Función para enviar correos electrónicos
export const sendEmail = async (to: string[], subject: string, text: string, html: string) => {
    try {
        const response = await mg.messages.create(envs.MAILGUN_DOMAIN, {
            from: `Your Name <${envs.MAILGUN_SENDER}>`,
            to,
            subject,
            text,
            html,
        });
        console.log('Email sent:', response);
        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
