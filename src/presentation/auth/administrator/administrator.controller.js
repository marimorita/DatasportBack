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
exports.AuthAdministratorController = void 0;
const domain_1 = require("../../../domain");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config");
function generateVerificationCode() {
    const letters = Array(4)
        .fill(null)
        .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        .join('');
    const numbers = Array(4)
        .fill(null)
        .map(() => Math.floor(Math.random() * 10))
        .join('');
    return `${letters}${numbers}`;
}
class AuthAdministratorController {
    constructor(authAdministratorRepository) {
        this.authAdministratorRepository = authAdministratorRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerAdministrator = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerAdministratorDto] = domain_1.RegisterAdministratorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authAdministratorRepository.register(registerAdministratorDto);
                res.status(201).json({ message: 'Registro exitoso!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.loginAdministrator = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, loginAdministratorDto] = domain_1.LoginAdministratorDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const routeCode = generateVerificationCode();
            try {
                const { token, role, message } = yield this.authAdministratorRepository.login(loginAdministratorDto);
                res.json({ token, role, routeCode, message });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.getAdministratorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.params.token;
            console.log("Token recibido:", token);
            if (!token) {
                return res.status(400).json({ error: 'Token requerido' });
            }
            try {
                // Verifica el token
                const decoded = jsonwebtoken_1.default.verify(token, config_1.envs.JWT_SECRET);
                console.log("Email decodificado:", decoded.user.email);
                // Obtiene el administrador basado en el email decodificado
                const admin = yield this.authAdministratorRepository.getAdministratorByEmail(decoded.user.email);
                console.log("Administrador encontrado:", admin);
                if (!admin) {
                    return res.status(404).json({ error: 'Administrador no encontrado' });
                }
                res.status(200).json(admin);
            }
            catch (error) {
                console.log(error);
                this.handleError(error, res);
            }
        });
        this.updateAdministratorImg = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('Received request to update admin img');
            const id = parseInt(req.params.id, 10); // ID del cliente desde los parámetros de la URL
            const { img } = req.body; // Estado actualizado desde el cuerpo de la solicitud
            try {
                const admin = yield this.authAdministratorRepository.updateAdministratorImg(id, img);
                if (!admin) {
                    return res.status(404).json({ error: 'Admin no encontrado' });
                }
                res.status(200).json(admin);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthAdministratorController = AuthAdministratorController;
