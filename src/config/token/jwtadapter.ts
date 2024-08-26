import jwt from 'jsonwebtoken';
import { get } from 'env-var'; // Asumiendo que usas env-var para manejar las variables de entorno

export class JwtAdapter {
    private static readonly secretKey: string = get('JWT_SECRET').required().asString(); // JWT_SECRET debe estar definido en tus variables de entorno

    static sign(payload: any): string {
        return jwt.sign(payload, this.secretKey, { expiresIn: '1h' }); // Ejemplo: token expira en 1 hora
    }

    static verify(token: string): any {
        try {
            return jwt.verify(token, this.secretKey);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}