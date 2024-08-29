"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoles = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../envs"); // Ajusta esta importación según tu proyecto
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Se requiere Token' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Se requiere Token' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, envs_1.envs.JWT_SECRET);
        req.user = decoded.user; // Asigna el token decodificado a req.user
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'No tienes acceso a esta accion' });
    }
};
exports.authenticateToken = authenticateToken;
const authorizeRoles = (roles) => (req, res, next) => {
    var _a;
    const userRole = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role; // Verifica el rol del usuario
    if (!userRole || !roles.includes(userRole)) {
        return res.status(403).json({ error: 'No tienes permiso para esta accion' });
    }
    next();
};
exports.authorizeRoles = authorizeRoles;
