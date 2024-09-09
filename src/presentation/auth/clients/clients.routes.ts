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
        router.patch('/clients/update/name', controller.UpdateNameClientDto);
        router.patch('/clients/update/lastname', controller.UpdateLastNameClientDto);
        router.patch('/clients/update/email', controller.UpdateEmailClientDto);
        router.patch('/clients/update/phone', controller.UpdatePhoneClientDto);
        router.patch('/clients/update/address', controller.UpdateAddressClientDto);
        router.patch('/clients/update/state', controller.UpdateStateClientDto);
        router.patch('/clients/:id/img', authenticateToken, authorizeRoles(['admin', 'employee']), controller.updateClientImg);


        return router;
    }
}