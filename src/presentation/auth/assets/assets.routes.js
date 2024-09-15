"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAssetsRoutes = void 0;
const express_1 = require("express");
const assets_controller_1 = require("./assets.controller");
const infraestructure_1 = require("../../../infraestructure");
class AuthAssetsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthAssetsDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthAssetsRepositoryImpl(datasource);
        const controller = new assets_controller_1.AuthAssetsController(AuthRepository);
        // router.post('/login', controller.registerProducts);
        router.post('/register' /* , authenticateToken, authorizeRoles(['admin', 'employee']) */, controller.registerAssets);
        router.get('/assets', controller.getAllAssets);
        router.get('/assets/:id', controller.getAssetsById);
        router.patch('/assets/update/stock', controller.updateAssetsStock);
        router.patch('/assets/update/name', controller.updateAssetsName);
        router.patch('/assets/update/description', controller.updateAssetsDescription);
        router.patch('/assets/update/img', controller.updateAssetsImg);
        return router;
    }
}
exports.AuthAssetsRoutes = AuthAssetsRoutes;
