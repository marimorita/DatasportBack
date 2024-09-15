"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthVerificationController = void 0;
const verificationCodes_1 = require("../../../config/token/verificationCodes");
const config_1 = require("../../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const domain_1 = require("../../../domain");
class AuthVerificationController {
    constructor() {
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Error del servidor' });
        };
        this.verifyCode = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { code } = req.body;
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!token || !code) {
                return res.status(400).json({ error: 'Se requiere codigo y token' });
            }
            try {
                // Verifica y decodifica el token
                const decoded = jsonwebtoken_1.default.verify(token, config_1.envs.JWT_SECRET);
                const email = decoded.user.email;
                // Verifica el código en el array temporal
                const validCode = (0, verificationCodes_1.getVerificationCode)(email, code);
                if (!validCode) {
                    throw new domain_1.CustomError(400, 'Codigo Invalido o Expiro');
                }
                // Código es válido, completa la autenticación
                res.status(200).json({ message: 'Codigo Correcto' });
            }
            catch (error) {
                console.error('Error verifying code:', error); // Agregado para más detalles en los logs
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthVerificationController = AuthVerificationController;
