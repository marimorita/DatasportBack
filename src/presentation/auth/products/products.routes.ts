import { Router } from "express";
import { AuthProductsController } from "./products.controller";
import { AuthProductsDataSourceImpl,AuthProductsRepositoryImpl  } from "../../../infraestructure";
import { authenticateToken, authorizeRoles } from "../../../config";


export class AuthProductsRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthProductsDataSourceImpl();
        const AuthRepository = new AuthProductsRepositoryImpl(datasource); 
        const controller = new AuthProductsController(AuthRepository);

        // router.post('/login', controller.registerProducts);
        router.post('/register', authenticateToken, authorizeRoles(['admin', 'employee']), controller.registerProducts)
        router.get('/products', controller.getAllProducts)
        router.get('/products/:id', controller.getProductsById)

        return router;
    }
}