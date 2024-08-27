import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { envs } from '../envs'; // Asegúrate de tener tus variables de entorno configuradas
import { storeVerificationCode } from './verificationCodes';
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { EmailClient } from '@azure/communication-email';

const connectionString = "endpoint=https://email-adso.unitedstates.communication.azure.com/;accesskey=CDzIt1sZKrxuRpc14SLRWY1jEYNvOA58aKUejbP1pFwM6nF15T2GJQQJ99AHACULyCps5mg0AAAAAZCSvpGy";
const client = new EmailClient(connectionString);

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: envs.GMAIL_USER,
//         pass: envs.GMAIL_PASS,
//     },
// });

const getHtmlTemplate = (code: string, templateName: string = 'Page.html') => {
    const templatePath = path.join(__dirname, `../../email/${templateName}`);
    const source = fs.readFileSync(templatePath, 'utf-8');
    const template = Handlebars.compile(source);
    return template({ verificationCode: code );
};

export const verifyTokenAndSendCode = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ status: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, envs.JWT_SECRET as string) as any;
        const email = decoded.user.email;

        // Genera el código de verificación
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        // Guarda el código en el array temporal
        storeVerificationCode(email, verificationCode);

        // Genera el contenido HTML usando la plantilla
        const html = getHtmlTemplate(verificationCode);

        const emailMessage = {
            senderAddress: "DoNotReply@6a2ebcd3-a272-4bad-b5f0-1dc9698c2b4b.azurecomm.net",
            content: {
                subject: 'Tu código de verificación',
                html, 
            },
            recipients: {
                to: [{ address: email }],
            },
        };

        const poller = await client.beginSend(emailMessage);
        const result = await poller.pollUntilDone();

        if (result.status !== 'Succeeded') {
            console.error('Error sending email:', result);
            throw new Error('Error enviando el correo electrónico usando Azure Communication Services');
        }

        res.status(200).json({ status: 'Verification code sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ status: 'Error sending verification code' });
    }
};

