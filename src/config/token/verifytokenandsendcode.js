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
exports.verifyTokenAndSendCode = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../envs"); // Asegúrate de tener tus variables de entorno configuradas
const verificationCodes_1 = require("./verificationCodes");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const communication_email_1 = require("@azure/communication-email");
const connectionString = "endpoint=https://email-adso.unitedstates.communication.azure.com/;accesskey=CDzIt1sZKrxuRpc14SLRWY1jEYNvOA58aKUejbP1pFwM6nF15T2GJQQJ99AHACULyCps5mg0AAAAAZCSvpGy";
const client = new communication_email_1.EmailClient(connectionString);
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: envs.GMAIL_USER,
//         pass: envs.GMAIL_PASS,
//     },
// });
const getHtmlTemplate = (code, templateName = 'Page.html') => {
    const templatePath = path_1.default.join(__dirname, `../../email/${templateName}`);
    const source = fs_1.default.readFileSync(templatePath, 'utf-8');
    const template = handlebars_1.default.compile(source);
    return template({ verificationCode: code });
};
const verifyTokenAndSendCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ status: 'Token is required' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, envs_1.envs.JWT_SECRET);
        const email = decoded.user.email;
        // Genera el código de verificación
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        // Guarda el código en el array temporal
        (0, verificationCodes_1.storeVerificationCode)(email, verificationCode);
        // Genera el contenido HTML usando la plantilla
        const html = getHtmlTemplate(verificationCode);
        const emailMessage = {
            senderAddress: "DoNotReply@6a2ebcd3-a272-4bad-b5f0-1dc9698c2b4b.azurecomm.net",
            content: {
                subject: 'Tu código de verificación',
                html,
            },
            recipients: {
                to: [{ address: email }],
            },
        };
        const poller = yield client.beginSend(emailMessage);
        const result = yield poller.pollUntilDone();
        if (result.status !== 'Succeeded') {
            console.error('Error sending email:', result);
            throw new Error('Error enviando el correo electrónico usando Azure Communication Services');
        }
        res.status(200).json({ status: 'Verification code sent' });
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ status: 'Error sending verification code' });
    }
});
exports.verifyTokenAndSendCode = verifyTokenAndSendCode;
