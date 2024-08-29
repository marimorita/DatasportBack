"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_var_1 = require("env-var"); // Asumiendo que usas env-var para manejar las variables de entorno
class JwtAdapter {
    static sign(payload) {
        return jsonwebtoken_1.default.sign(payload, this.secretKey, { expiresIn: '1h' }); // Ejemplo: token expira en 1 hora
    }
    static verify(token) {
        try {
            return jsonwebtoken_1.default.verify(token, this.secretKey);
        }
        catch (error) {
            throw new Error('Invalid token');
        }
    }
}
exports.JwtAdapter = JwtAdapter;
JwtAdapter.secretKey = (0, env_var_1.get)('JWT_SECRET').required().asString(); // JWT_SECRET debe estar definido en tus variables de entorno
