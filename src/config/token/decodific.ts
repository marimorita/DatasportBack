import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { envs } from '../envs';

interface DecodedToken {
  id: number;
  role: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.params.token;

    if (!token) {
        return res.status(401).json({ error: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, envs.JWT_SECRET as string) as DecodedToken;
        req.user = decoded; // Añades los datos del usuario al objeto `req`
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};