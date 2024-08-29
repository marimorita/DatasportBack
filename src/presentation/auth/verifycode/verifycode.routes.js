"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyCodeRoutes = void 0;
const express_1 = require("express");
const verifycodecontroller_1 = require("./verifycodecontroller");
class VerifyCodeRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const controller = new verifycodecontroller_1.AuthVerificationController();
        router.post('/verifycode', controller.verifyCode);
        return router;
    }
}
exports.VerifyCodeRoutes = VerifyCodeRoutes;
