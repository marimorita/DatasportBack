import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { envs } from '../envs'; 
import { CustomError } from '../../domain'; 


interface User {
    email: string;
    role: string;
  }
  
  // Extiende la interfaz de Request de Express para incluir la propiedad user
  interface CustomRequest extends Request {
    user?: User;
  }
  
  export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
          return res.status(401).json({ error: 'Se requiere Token' });
      }
  
      const token = authHeader.split(' ')[1];
      if (!token) {
          return res.status(401).json({ error: 'Se requiere Token' });
      }
  
      try {
          const decoded = jwt.verify(token, envs.JWT_SECRET as string) as any;
          req.user = decoded.user; // Asigna el token decodificado a req.user
          next();
      } catch (error) {
          return res.status(401).json({ error: 'No tienes acceso a esta accion' });
      }
  };
  
  export const authorizeRoles = (roles: string[]) => (req: CustomRequest, res: Response, next: NextFunction) => {
      const userRole = req.user?.role; // Verifica el rol del usuario
      if (!userRole || !roles.includes(userRole)) {
          return res.status(403).json({ error: 'No tienes permiso para esta accion' });
      }
      next();
  };