import { Router } from "express";
import { AuthClientsController } from "./clients.controller";
import { AuthClientsDataSourceImpl, AuthClientsRepositoryImpl } from "../../../infraestructure";
import { authenticateToken, authorizeRoles } from "../../../config";


export class AuthClientsRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthClientsDataSourceImpl();
        const AuthRepository = new AuthClientsRepositoryImpl(datasource); 
        const controller = new AuthClientsController(AuthRepository);

        // router.post('/login', controller.loginClient);
        router.post('/register', authenticateToken, authorizeRoles(['admin', 'employee']), controller.registerClient)
        router.get('/clients', controller.getAllClients)
        router.get('/clients/:id', controller.getClientById)
        router.put('/clients/:id', authenticateToken, authorizeRoles(['admin', 'employee']), controller.updateAllClientData)
        router.patch('/clients/:id/state', authenticateToken, authorizeRoles(['admin', 'employee']), controller.updateClientStatus);
        router.patch('/clients/:id/img', authenticateToken, authorizeRoles(['admin', 'employee']), controller.updateClientImg);


        return router;
    }
}