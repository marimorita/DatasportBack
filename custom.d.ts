import { User } from './path/to/user/type'; // Ajusta la ruta al tipo de usuario que estás utilizando

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}   