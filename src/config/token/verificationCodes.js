"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerificationCode = exports.storeVerificationCode = void 0;
const verificationCodes = [];
// 1 minuto: 1 * 60 * 1000
// 5 minutos: 5 * 60 * 1000
// 15 minutos: 15 * 60 * 1000
// 30 minutos: 30 * 60 * 1000
// 1 hora: 60 * 60 * 1000
// Función para almacenar un código de verificación
const storeVerificationCode = (email, code) => {
    const expiresAt = Date.now() + 5 * 60 * 1000;
    verificationCodes.push({ email, code, expiresAt });
};
exports.storeVerificationCode = storeVerificationCode;
// Función para obtener un código de verificación
const getVerificationCode = (email, code) => {
    return verificationCodes.find((vc) => vc.email === email && vc.code === code && vc.expiresAt > Date.now());
};
exports.getVerificationCode = getVerificationCode;
