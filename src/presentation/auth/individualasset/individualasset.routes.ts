import { Router } from "express";
import { AuthIndividualAssetsController } from "./individualasset.controller";
import { AuthIndividualAssetsDataSourceImpl, AuthIndividualAssetsRepositoryImpl  } from "../../../infraestructure";
import { authenticateToken, authorizeRoles } from "../../../config";


export class AuthIndividualAssetsRoutes {

    static get routes(): Router {

        const router = Router();

        const datasource = new AuthIndividualAssetsDataSourceImpl();
        const AuthRepository = new AuthIndividualAssetsRepositoryImpl(datasource); 
        const controller = new AuthIndividualAssetsController(AuthRepository);

        // router.post('/login', controller.registerProducts);
        router.post('/register'/* , authenticateToken, authorizeRoles(['admin', 'employee']) */, controller.registerIndividualAssets)
        router.get('/individualassets/:id', controller.getAllIndividualAssetsById)
        router.patch('/individualassets/update/name', controller.updateIndividualAssetsName)
        router.patch('/individualassets/update/description', controller.updateIndividualAssetsDescription)
        router.patch('/individualassets/update/img', controller.updateIndividualAssetsImg)
        
        return router;
    }
}