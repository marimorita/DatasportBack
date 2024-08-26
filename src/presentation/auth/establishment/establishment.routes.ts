import { Router } from "express";
import { AuthEstablishmentController } from "./establishment.controller";
import { AuthEstablishmentDataSourceImpl,AuthEstablishmentRepositoryImpl  } from "../../../infraestructure";
import { authenticateToken, authorizeRoles } from "../../../config";


export class AuthEstablishmentRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthEstablishmentDataSourceImpl();
        const AuthRepository = new AuthEstablishmentRepositoryImpl(datasource); 
        const controller = new AuthEstablishmentController(AuthRepository);

        // router.post('/login', controller.registerEstablishment);
        router.post('/register', authenticateToken, authorizeRoles(['admin', 'employee']), controller.registerEstablishment)

        return router;
    }
}