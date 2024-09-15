"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClientsRoutes = void 0;
const express_1 = require("express");
const clients_controller_1 = require("./clients.controller");
const infraestructure_1 = require("../../../infraestructure");
const config_1 = require("../../../config");
class AuthClientsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthClientsDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthClientsRepositoryImpl(datasource);
        const controller = new clients_controller_1.AuthClientsController(AuthRepository);
        // router.post('/login', controller.loginClient);
        router.post('/register', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin', 'employee']), controller.registerClient);
        router.get('/clients', controller.getAllClients);
        router.get('/clients/:id', controller.getClientById);
        router.put('/clients/:id', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin', 'employee']), controller.updateAllClientData);
        router.patch('/clients/update/name', controller.UpdateNameClientDto);
        router.patch('/clients/update/lastname', controller.UpdateLastNameClientDto);
        router.patch('/clients/update/email', controller.UpdateEmailClientDto);
        router.patch('/clients/update/phone', controller.UpdatePhoneClientDto);
        router.patch('/clients/update/address', controller.UpdateAddressClientDto);
        router.patch('/clients/update/state', controller.UpdateStateClientDto);
        router.patch('/clients/:id/img', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin', 'employee']), controller.updateClientImg);
        return router;
    }
}
exports.AuthClientsRoutes = AuthClientsRoutes;
