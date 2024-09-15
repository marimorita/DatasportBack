"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdministratorRoutes = void 0;
const express_1 = require("express");
const administrator_controller_1 = require("./administrator.controller");
const infraestructure_1 = require("../../../infraestructure");
class AuthAdministratorRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthAdministratorDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthAdministratorRepositoryImpl(datasource);
        const controller = new administrator_controller_1.AuthAdministratorController(AuthRepository);
        router.post('/login', controller.loginAdministrator);
        router.post('/register', controller.registerAdministrator);
        router.get('/administrator/:token', controller.getAdministratorById);
        router.patch('/administrator/update/name', controller.updateAdministratorName);
        // router.patch('/administrator/update/id', controller.updateAdministratorId);
        router.patch('/administrator/update/phone', controller.updateAdministratorPhone);
        router.patch('/administrator/update/email', controller.updateAdministratorEmail);
        router.patch('/administrator/:id/img', controller.updateAdministratorImg);
        return router;
    }
}
exports.AuthAdministratorRoutes = AuthAdministratorRoutes;
