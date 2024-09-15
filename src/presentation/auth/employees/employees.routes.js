"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEmployeesRoutes = void 0;
const express_1 = require("express");
const employees_controller_1 = require("./employees.controller");
const infraestructure_1 = require("../../../infraestructure");
const config_1 = require("../../../config");
class AuthEmployeesRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthEmployeesDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthEmployeesRepositoryImpl(datasource);
        const controller = new employees_controller_1.AuthEmployeesController(AuthRepository);
        router.post('/login', controller.loginEmployees);
        router.post('/register', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin']), controller.registerEmployees);
        router.get('/employee/token/:token', controller.getEmployeeByToken);
        router.get('/employee', controller.getAllEmployees);
        router.get('/employee/:id', controller.getEmployeeById);
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
exports.AuthEmployeesRoutes = AuthEmployeesRoutes;
