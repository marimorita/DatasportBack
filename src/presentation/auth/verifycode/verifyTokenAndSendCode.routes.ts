import { Router } from 'express';
import { verifyTokenAndSendCode } from '../../../config';

// Define la ruta para enviar el código de verificación

export class VerifyTokenAndSendCodeCodeRoutes {
    static get routes(): Router {
        const router = Router();

        router.post('/veriftokenandsendcode', verifyTokenAndSendCode);

        return router;
    }
}