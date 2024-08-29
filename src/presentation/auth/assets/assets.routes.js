"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAssetsRoutes = void 0;
const express_1 = require("express");
const assets_controller_1 = require("./assets.controller");
const infraestructure_1 = require("../../../infraestructure");
const config_1 = require("../../../config");
class AuthAssetsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthAssetsDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthAssetsRepositoryImpl(datasource);
        const controller = new assets_controller_1.AuthAssetsController(AuthRepository);
        // router.post('/login', controller.registerProducts);
        router.post('/register', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin', 'employee']), controller.registerAssets);
        return router;
    }
}
exports.AuthAssetsRoutes = AuthAssetsRoutes;
