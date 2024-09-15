"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProductsRoutes = void 0;
const express_1 = require("express");
const products_controller_1 = require("./products.controller");
const infraestructure_1 = require("../../../infraestructure");
const config_1 = require("../../../config");
class AuthProductsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new infraestructure_1.AuthProductsDataSourceImpl();
        const AuthRepository = new infraestructure_1.AuthProductsRepositoryImpl(datasource);
        const controller = new products_controller_1.AuthProductsController(AuthRepository);
        // router.post('/login', controller.registerProducts);
        router.post('/register', config_1.authenticateToken, (0, config_1.authorizeRoles)(['admin', 'employee']), controller.registerProducts);
        router.get('/products', controller.getAllProducts);
        router.get('/products/:id', controller.getProductsById);
        return router;
    }
}
exports.AuthProductsRoutes = AuthProductsRoutes;
