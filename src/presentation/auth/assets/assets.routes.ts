import { Router } from "express";
import { AuthAssetsController } from "./assets.controller";
import { AuthAssetsDataSourceImpl,AuthAssetsRepositoryImpl  } from "../../../infraestructure";
import { authenticateToken, authorizeRoles } from "../../../config";
export class AuthAssetsRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthAssetsDataSourceImpl();
        const AuthRepository = new AuthAssetsRepositoryImpl(datasource); 
        const controller = new AuthAssetsController(AuthRepository);

        // router.post('/login', controller.registerProducts);
        router.post('/register'/* , authenticateToken, authorizeRoles(['admin', 'employee']) */, controller.registerAssets)
        router.get('/assets', controller.getAllAssets)
        router.get('/assets/:id', controller.getAssetsById)
        router.patch('/assets/update/stock', controller.updateAssetsStock)
        router.patch('/assets/update/name', controller.updateAssetsName)
        router.patch('/assets/update/description', controller.updateAssetsDescription)
        router.patch('/assets/update/img', controller.updateAssetsImg)


        return router;
    }
}