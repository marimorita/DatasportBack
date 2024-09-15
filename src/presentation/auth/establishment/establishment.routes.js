"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEstablishmentRoutes = void 0;
const express_1 = require("express");
const establishment_controller_1 = require("./establishment.controller");
const infraestructure_1 = require("../../../infraestructure");
const config_1 = require("../../../config");
class AuthEstablishmentRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthEstablishmentDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthEstablishmentRepositoryImpl(datasource);
        const controller = new establishment_controller_1.AuthEstablishmentController(AuthRepository);
        // router.post('/login', controller.registerEstablishment);
        router.post('/register', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin', 'employee']), controller.registerEstablishment);
        return router;
    }
}
exports.AuthEstablishmentRoutes = AuthEstablishmentRoutes;
