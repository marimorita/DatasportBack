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
exports.sendEmail = void 0;
const form_data_1 = __importDefault(require("form-data"));
const mailgun_js_1 = __importDefault(require("mailgun.js"));
const envs_1 = require("./envs"); // Asegúrate de que envs.ts está configurado correctamente
// Configura Mailgun
const mailgun = new mailgun_js_1.default(form_data_1.default);
const mg = mailgun.client({
    username: 'api',
    key: envs_1.envs.MAILGUN_API_KEY, // Obtén la clave API desde las variables de entorno
});
// Función para enviar correos electrónicos
const sendEmail = (to, subject, text, html) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield mg.messages.create(envs_1.envs.MAILGUN_DOMAIN, {
            from: `Your Name <${envs_1.envs.MAILGUN_SENDER}>`,
            to,
            subject,
            text,
            html,
        });
        console.log('Email sent:', response);
        return response;
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
});
exports.sendEmail = sendEmail;
