import { Request, Response } from "express";
import { getVerificationCode } from '../../../config/token/verificationCodes';
import { envs } from "../../../config";
import jwt from 'jsonwebtoken';
import { CustomError } from "../../../domain";

export class AuthVerificationController {
    constructor() {}

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Error del servidor' });
    }

    verifyCode = async (req: Request, res: Response) => {
        const { code } = req.body;
        const token = req.headers.authorization?.split(' ')[1];

        if (!token || !code) {
            return res.status(400).json({ error: 'Se requiere codigo y token' });
        }

        try {
            // Verifica y decodifica el token
            const decoded = jwt.verify(token, envs.JWT_SECRET as string) as any;
            const email = decoded.user.email;

            // Verifica el código en el array temporal
            const validCode = getVerificationCode(email, code);

            if (!validCode) {
                throw new CustomError(400, 'Codigo Invalido o Expiro');
            }

            // Código es válido, completa la autenticación
            res.status(200).json({ message: 'Codigo Correcto' });
        } catch (error) {
            console.error('Error verifying code:', error); // Agregado para más detalles en los logs
            this.handleError(error, res);
        }
    }
}
