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
        router.post('/register', controller.registerProducts)
        router.get('/products', controller.getAllProducts)
        router.get('/products/:id', controller.getProductsById)
        router.patch('/products/update/name', controller.UpdateNameProductsDto)
        router.patch('/products/update/description', controller.UpdateDescriptionProductsDto)
        router.patch('/products/update/state', controller.UpdateStateProductsDto)
        router.patch('/products/update/stock', controller.UpdateStockProductsDto)
        router.patch('/products/update/img', controller.UpdateImgProductsDto)
        router.patch('/products/update/price', controller.UpdatePriceProductsDto)


        return router;
    }
}