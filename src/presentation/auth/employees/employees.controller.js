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
exports.AuthEmployeesController = void 0;
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
console.log(generateVerificationCode());
class AuthEmployeesController {
    constructor(authEmployeesRepository) {
        this.authEmployeesRepository = authEmployeesRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Error del servidor' });
        };
        this.registerEmployees = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerEmployeesDto] = domain_1.RegisterEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authEmployeesRepository.register(registerEmployeesDto);
                res.status(201).json({ message: 'Registro exitoso!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.loginEmployees = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, loginEmployeesDto] = domain_1.LoginEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const routeCode = generateVerificationCode();
            try {
                const { token, role, message } = yield this.authEmployeesRepository.login(loginEmployeesDto);
                res.json({ token, role, routeCode, message });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.getAllEmployees = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield this.authEmployeesRepository.getAllEmployees();
                res.json(employee);
            }
            catch (error) {
                console.log(error);
                this.handleError(error, res);
            }
        });
        this.getEmployeeById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // Convertir el ID de string a number
            const employeeId = parseInt(id, 10);
            if (isNaN(employeeId)) {
                return res.status(400).json({ error: 'Formato de id invalido' });
            }
            try {
                const employee = yield this.authEmployeesRepository.getEmployeeById(employeeId);
                if (!employee) {
                    return res.status(404).json({ error: 'Este empleado no existe' });
                }
                res.json(employee);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.getEmployeeByToken = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.params.token;
            if (!token) {
                return res.status(400).json({ error: 'Token requerido' });
            }
            try {
                const decoded = jsonwebtoken_1.default.verify(token, config_1.envs.JWT_SECRET);
                const employee = yield this.authEmployeesRepository.getEmployeeByEmail(decoded.user.email);
                if (!employee) {
                    return res.status(404).json({ error: 'Empleado no encontrado' });
                }
                res.status(200).json(employee);
            }
            catch (error) {
                console.log(error);
                this.handleError(error, res);
            }
        });
        this.UpdateNameEmployeesDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateNameEmployeesDto] = domain_1.UpdateNameEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authEmployeesRepository.UpdateNameEmployeesDto(updateNameEmployeesDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateLastNameEmployeesDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateLastNameEmployeesDto] = domain_1.UpdateLastNameEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authEmployeesRepository.UpdateLastNameEmployeesDto(updateLastNameEmployeesDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateEmailEmployeesDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateEmailEmployeesDto] = domain_1.UpdateEmailEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authEmployeesRepository.UpdateEmailEmployeesDto(updateEmailEmployeesDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdatePhoneEmployeesDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updatePhoneEmployeesDto] = domain_1.UpdatePhoneEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authEmployeesRepository.UpdatePhoneEmployeesDto(updatePhoneEmployeesDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateAddressEmployeesDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateAddressEmployeesDto] = domain_1.UpdateAddressEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authEmployeesRepository.UpdateAddressEmployeesDto(updateAddressEmployeesDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateStateEmployeesDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateStateEmployeesDto] = domain_1.UpdateStateEmployeesDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authEmployeesRepository.UpdateStateEmployeesDto(updateStateEmployeesDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateEmployeeImg = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('Received request to update employee img');
            const id = parseInt(req.params.id, 10); // ID del cliente desde los parámetros de la URL
            const { img } = req.body; // Estado actualizado desde el cuerpo de la solicitud
            try {
                const employee = yield this.authEmployeesRepository.updateEmployeeImg(id, img);
                if (!employee) {
                    return res.status(404).json({ error: 'Empleado no encontrado' });
                }
                res.status(200).json(employee);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthEmployeesController = AuthEmployeesController;
