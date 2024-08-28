import { Router } from "express";
import { AuthClientsRoutes } from "./auth/clients/clients.routes";
import { AuthEmployeesRoutes } from "./auth/employees/employees.routes";
import { AuthEstablishmentRoutes } from "./auth/establishment/establishment.routes";
import { AuthAdministratorRoutes } from "./auth/administrator/administrator.routes";
import { AuthProductsRoutes } from "./auth/products/products.routes";
import { AuthAssetsRoutes } from "./auth/assets/assets.routes";
import { AuthIndividualAssetsRoutes } from "./auth/individualasset/individualasset.routes";
import { VerifyCodeRoutes } from "./auth/verifycode/verifycode.routes";
import { VerifyTokenAndSendCodeCodeRoutes } from "./auth/verifycode/verifyTokenAndSendCode.routes";


export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/ds/auth/clients', AuthClientsRoutes.routes)
        router.use('/ds/auth/employees', AuthEmployeesRoutes.routes)
        router.use('/ds/auth/establishment', AuthEstablishmentRoutes.routes)
        router.use('/ds/auth/administrator', AuthAdministratorRoutes.routes)
        router.use('/ds/auth/products', AuthProductsRoutes.routes)
        router.use('/ds/auth/assets', AuthAssetsRoutes.routes)
        router.use('/ds/auth/individualassets', AuthIndividualAssetsRoutes.routes)
        router.use('/ds/auth/twoverific', VerifyCodeRoutes.routes)
        router.use('/ds/auth/vr', VerifyTokenAndSendCodeCodeRoutes.routes)
        router.use('/ds/auth/vr', VerifyTokenAndSendCodeCodeRoutes.routes)

        return router;
    }
}