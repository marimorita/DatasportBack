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
exports.AuthEmployeesDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const config_1 = require("../../../config");
const domain_1 = require("../../../domain");
const data_1 = require("../../../data");
const config_2 = require("../../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthEmployeesDataSourceImpl {
    constructor() {
        this.employeesRepository = ormconfig_1.AppDataSource.getRepository(data_1.EmployeesEntity);
    }
    createEmployeeData(payload) {
        // Puedes crear el DTO aquí sin exponer datos
        const [error, dto] = domain_1.RegisterEmployeesDto.create(payload);
        if (error)
            throw domain_1.CustomError.badRequest(error);
        return dto;
    }
    register(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const dto = this.createEmployeeData(payload);
            const { id, name, lastName, email, phone, address, password, img, role, idCenter, state } = dto;
            const hashedPassword = config_1.BcryptAdapter.hash(password);
            try {
                const existingEmployee = yield this.employeesRepository.findOne({ where: { email } });
                if (existingEmployee)
                    throw domain_1.CustomError.badRequest("Este empleado ya existe");
                const newEmployee = this.employeesRepository.create({
                    id,
                    name,
                    lastName,
                    email,
                    phone,
                    address,
                    password: hashedPassword,
                    img,
                    role,
                    idCenter,
                    state,
                });
                yield this.employeesRepository.save(newEmployee);
                return { message: "Registro exitoso" };
            }
            catch (error) {
                console.error("Error registering employee:", error);
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    login(loginEmployeesDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginEmployeesDto;
            try {
                const employees = yield this.employeesRepository.findOne({ where: { email } });
                if (!employees)
                    throw domain_1.CustomError.badRequest("Este usuario no existe");
                if (!employees.password)
                    throw domain_1.CustomError.unauthorized("Contraseña Incorrecta");
                const isPasswordValid = config_1.BcryptAdapter.compare(password, employees.password);
                if (!isPasswordValid)
                    throw domain_1.CustomError.unauthorized("Contraseña Incorrecta");
                const token = jsonwebtoken_1.default.sign({ user: { email: employees.email, role: employees.role } }, config_2.envs.JWT_SECRET, { expiresIn: '1h', });
                return {
                    token,
                    role: employees.role,
                    message: "Inicio de sesion exitoso"
                };
            }
            catch (error) {
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.employeesRepository.find();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    getEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.employeesRepository.findOne({ where: { id } });
            }
            catch (error) {
                console.error("Error fetching employee by ID:", error);
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    getEmployeeByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementación para obtener el administrador por su email
            // Ejemplo usando TypeORM:
            const admin = yield this.employeesRepository.findOne({ where: { email } });
            return admin || null;
        });
    }
    UpdateNameEmployeesDto(updateNameEmployeesDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = updateNameEmployeesDto;
            try {
                const employee = yield this.employeesRepository.findOneBy({ id });
                if (!employee) {
                    return null;
                }
                yield this.employeesRepository.update({ id }, { name });
                return employee;
            }
            catch (error) {
                console.error('Error updating employee name:', error);
                throw new Error('Error updating employee name');
            }
        });
    }
    UpdateLastNameEmployeesDto(updateLastNameEmployeesDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, lastName } = updateLastNameEmployeesDto;
            try {
                const employee = yield this.employeesRepository.findOneBy({ id });
                if (!employee) {
                    return null;
                }
                yield this.employeesRepository.update({ id }, { lastName });
                return employee;
            }
            catch (error) {
                console.error('Error updating employee phone:', error);
                throw new Error('Error updating employee phone');
            }
        });
    }
    UpdateEmailEmployeesDto(updateEmailEmployeesDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, email } = updateEmailEmployeesDto;
            try {
                const employee = yield this.employeesRepository.findOneBy({ id });
                if (!employee) {
                    return null;
                }
                yield this.employeesRepository.update({ id }, { email });
                return employee;
            }
            catch (error) {
                console.error('Error updating employee email:', error);
                throw new Error('Error updating employee email');
            }
        });
    }
    UpdatePhoneEmployeesDto(updatePhoneEmployeesDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, phone } = updatePhoneEmployeesDto;
            try {
                const employee = yield this.employeesRepository.findOneBy({ id });
                if (!employee) {
                    return null;
                }
                yield this.employeesRepository.update({ id }, { phone });
                return employee;
            }
            catch (error) {
                console.error('Error updating employee phone:', error);
                throw new Error('Error updating employee phone');
            }
        });
    }
    UpdateAddressEmployeesDto(updateAddressEmployeesDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, address } = updateAddressEmployeesDto;
            try {
                const employee = yield this.employeesRepository.findOneBy({ id });
                if (!employee) {
                    return null;
                }
                yield this.employeesRepository.update({ id }, { address });
                return employee;
            }
            catch (error) {
                console.error('Error updating employee address:', error);
                throw new Error('Error updating employee address');
            }
        });
    }
    UpdateStateEmployeesDto(updateStateEmployeesDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, state } = updateStateEmployeesDto;
            try {
                const employee = yield this.employeesRepository.findOneBy({ id });
                if (!employee) {
                    return null;
                }
                yield this.employeesRepository.update({ id }, { state });
                return employee;
            }
            catch (error) {
                console.error('Error updating employee state:', error);
                throw new Error('Error updating employee state');
            }
        });
    }
    updateEmployeeImg(id, img) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield this.employeesRepository.findOneBy({ id });
                if (!employee) {
                    return null;
                }
                yield this.employeesRepository.update(id, { img });
                return employee;
            }
            catch (error) {
                console.error('Error updating employee img:', error);
                throw new Error('Error updating employee img');
            }
        });
    }
}
exports.AuthEmployeesDataSourceImpl = AuthEmployeesDataSourceImpl;
