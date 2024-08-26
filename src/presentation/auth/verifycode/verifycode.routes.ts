import { Router } from 'express';
import { AuthVerificationController } from './verifycodecontroller';

export class VerifyCodeRoutes {
    static get routes(): Router {
        const router = Router();

        const controller = new AuthVerificationController();

        router.post('/verifycode', controller.verifyCode);

        return router;
    }
}