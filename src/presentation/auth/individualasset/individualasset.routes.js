"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthIndividualAssetsRoutes = void 0;
const express_1 = require("express");
const individualasset_controller_1 = require("./individualasset.controller");
const infraestructure_1 = require("../../../infraestructure");
const config_1 = require("../../../config");
class AuthIndividualAssetsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthIndividualAssetsDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthIndividualAssetsRepositoryImpl(datasource);
        const controller = new individualasset_controller_1.AuthIndividualAssetsController(AuthRepository);
        // router.post('/login', controller.registerProducts);
        router.post('/register', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin', 'employee']), controller.registerIndividualAssets);
        return router;
    }
}
exports.AuthIndividualAssetsRoutes = AuthIndividualAssetsRoutes;
