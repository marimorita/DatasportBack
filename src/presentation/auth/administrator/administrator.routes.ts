import { Router } from "express";
import { AuthAdministratorController } from "./administrator.controller";
import { AuthAdministratorDataSourceImpl, AuthAdministratorRepositoryImpl } from "../../../infraestructure";


export class AuthAdministratorRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthAdministratorDataSourceImpl();
        const AuthRepository = new AuthAdministratorRepositoryImpl(datasource); 
        const controller = new AuthAdministratorController(AuthRepository);

        router.post('/login', controller.loginAdministrator);
        router.post('/register', controller.registerAdministrator)
        router.get('/administrator/:token', controller.getAdministratorById);
        router.patch('/administrator/update/name', controller.updateAdministratorName);
        router.patch('/administrator/update/id', controller.updateAdministratorId);
        router.patch('/administrator/update/phone', controller.updateAdministratorPhone);
        router.patch('/administrator/update/email', controller.updateAdministratorEmail);
        router.patch('/administrator/:id/img', controller.updateAdministratorImg);

        return router;
    }
}