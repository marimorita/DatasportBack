"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const clients_routes_1 = require("./auth/clients/clients.routes");
const employees_routes_1 = require("./auth/employees/employees.routes");
const establishment_routes_1 = require("./auth/establishment/establishment.routes");
const administrator_routes_1 = require("./auth/administrator/administrator.routes");
const products_routes_1 = require("./auth/products/products.routes");
const assets_routes_1 = require("./auth/assets/assets.routes");
const individualasset_routes_1 = require("./auth/individualasset/individualasset.routes");
const verifycode_routes_1 = require("./auth/verifycode/verifycode.routes");
const verifyTokenAndSendCode_routes_1 = require("./auth/verifycode/verifyTokenAndSendCode.routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/ds/auth/clients', clients_routes_1.AuthClientsRoutes.routes);
        router.use('/ds/auth/employees', employees_routes_1.AuthEmployeesRoutes.routes);
        router.use('/ds/auth/establishment', establishment_routes_1.AuthEstablishmentRoutes.routes);
        router.use('/ds/auth/administrator', administrator_routes_1.AuthAdministratorRoutes.routes);
        router.use('/ds/auth/products', products_routes_1.AuthProductsRoutes.routes);
        router.use('/ds/auth/assets', assets_routes_1.AuthAssetsRoutes.routes);
        router.use('/ds/auth/individualassets', individualasset_routes_1.AuthIndividualAssetsRoutes.routes);
        router.use('/ds/auth/twoverific', verifycode_routes_1.VerifyCodeRoutes.routes);
        router.use('/ds/auth/vr', verifyTokenAndSendCode_routes_1.VerifyTokenAndSendCodeCodeRoutes.routes);
        router.use('/ds/auth/vr', verifyTokenAndSendCode_routes_1.VerifyTokenAndSendCodeCodeRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
