"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyTokenAndSendCodeCodeRoutes = void 0;
const express_1 = require("express");
const config_1 = require("../../../config");
// Define la ruta para enviar el código de verificación
class VerifyTokenAndSendCodeCodeRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.post('/veriftokenandsendcode', config_1.verifyTokenAndSendCode);
        return router;
    }
}
exports.VerifyTokenAndSendCodeCodeRoutes = VerifyTokenAndSendCodeCodeRoutes;
