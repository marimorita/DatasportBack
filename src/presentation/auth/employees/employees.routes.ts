import { Router } from "express";
import { AuthEmployeesController } from "./employees.controller";
import { AuthEmployeesDataSourceImpl, AuthEmployeesRepositoryImpl } from "../../../infraestructure";
import { authenticateToken, authorizeRoles } from "../../../config";


export class AuthEmployeesRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthEmployeesDataSourceImpl();
        const AuthRepository = new AuthEmployeesRepositoryImpl(datasource); 
        const controller = new AuthEmployeesController(AuthRepository);

        router.post('/login', controller.loginEmployees);
        router.post('/register', authenticateToken, authorizeRoles(['admin']), controller.registerEmployees)
        router.get('/employee/token/:token', controller.getEmployeeByToken)
        router.get('/employee', controller.getAllEmployees)
        router.get('/employee/:id', controller.getEmployeeById)
        router.patch('/employee/update/name', controller.UpdateNameEmployeesDto);
        router.patch('/employee/update/lastname', controller.UpdateLastNameEmployeesDto);
        router.patch('/employee/update/email', controller.UpdateEmailEmployeesDto);
        router.patch('/employee/update/phone', controller.UpdatePhoneEmployeesDto);
        router.patch('/employee/update/address', controller.UpdateAddressEmployeesDto);
        router.patch('/employee/update/state', controller.UpdateStateEmployeesDto);
        router.patch('/employee/:id/img', controller.updateEmployeeImg);

        return router;
    }
}