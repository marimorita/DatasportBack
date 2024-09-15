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
exports.AuthAdministratorDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const config_1 = require("../../../config");
const domain_1 = require("../../../domain");
const data_1 = require("../../../data");
const config_2 = require("../../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthAdministratorDataSourceImpl {
    constructor() {
        this.administratorRepository = ormconfig_1.AppDataSource.getRepository(data_1.AdministratorEntity);
    }
    register(registerAdministratorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, lastName, email, phone, address, password, img, role, idCenter } = registerAdministratorDto;
            const hashedPassword = config_1.BcryptAdapter.hash(password);
            try {
                const existingAdministratorByEmail = yield this.administratorRepository.findOne({ where: { email } });
                if (existingAdministratorByEmail)
                    throw domain_1.CustomError.badRequest("Este administrador ya existe");
                const existingAdministratorById = yield this.administratorRepository.findOne({ where: { id } });
                if (existingAdministratorById)
                    throw domain_1.CustomError.badRequest("Este administrador ya existe");
                const newAdministrator = this.administratorRepository.create({
                    id: id,
                    name: name,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    address: address,
                    password: hashedPassword,
                    img: img,
                    role: role,
                    idCenter: idCenter,
                });
                yield this.administratorRepository.save(newAdministrator);
                return { message: "Registro exitoso" };
            }
            catch (error) {
                console.error("Error registering client:", error);
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    login(loginAdministratorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginAdministratorDto;
            try {
                const admin = yield this.administratorRepository.findOne({ where: { email } });
                if (!admin)
                    throw domain_1.CustomError.badRequest("Este usuario no existe");
                if (!admin.password)
                    throw domain_1.CustomError.unauthorized("Contraseña Incorrecta");
                const isPasswordValid = config_1.BcryptAdapter.compare(password, admin.password);
                if (!isPasswordValid)
                    throw domain_1.CustomError.unauthorized("Contraseña Incorrecta");
                const token = jsonwebtoken_1.default.sign({ user: { email: admin.email, role: admin.role } }, config_2.envs.JWT_SECRET, { expiresIn: '1h', });
                return {
                    token,
                    role: admin.role,
                    message: "Inicio de sesion exitoso"
                };
            }
            catch (error) {
                console.error("Error registering client:", error);
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    getAdministratorByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementación para obtener el administrador por su email
            // Ejemplo usando TypeORM:
            const admin = yield this.administratorRepository.findOne({ where: { email } });
            return admin || null;
        });
    }
    updateAdministratorName(updateNameAdministratorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = updateNameAdministratorDto;
            try {
                const admin = yield this.administratorRepository.findOneBy({ id });
                if (!admin) {
                    return null;
                }
                yield this.administratorRepository.update({ id }, { name });
                return admin;
            }
            catch (error) {
                console.error('Error updating admin name:', error);
                throw new Error('Error updating admin name');
            }
        });
    }
    // async updateAdministratorId(updateIdAdministratorDto: UpdateIdAdministratorDto): Promise<AdministratorEntity | null> {
    //     const { id } = updateIdAdministratorDto;
    //     try {
    //         const admin = await this.administratorRepository.findOneBy({ id });
    //         if (!admin) {
    //             return null;
    //         }
    //         await this.administratorRepository.update({id}, { id });
    //         return admin;
    //     } catch (error) {
    //         console.error('Error updating admin id:', error);
    //         throw new Error('Error updating admin id');
    //     }
    // }
    updateAdministratorPhone(updatePhoneAdministratorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, phone } = updatePhoneAdministratorDto;
            try {
                const admin = yield this.administratorRepository.findOneBy({ id });
                if (!admin) {
                    return null;
                }
                yield this.administratorRepository.update({ id }, { phone });
                return admin;
            }
            catch (error) {
                console.error('Error updating admin phone:', error);
                throw new Error('Error updating admin phone');
            }
        });
    }
    updateAdministratorEmail(updateEmailAdministratorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, email } = updateEmailAdministratorDto;
            try {
                const admin = yield this.administratorRepository.findOneBy({ id });
                if (!admin) {
                    return null;
                }
                yield this.administratorRepository.update({ id }, { email });
                return admin;
            }
            catch (error) {
                console.error('Error updating admin email:', error);
                throw new Error('Error updating admin email');
            }
        });
    }
    updateAdministratorImg(id, img) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield this.administratorRepository.findOneBy({ id });
                if (!admin) {
                    return null;
                }
                yield this.administratorRepository.update(id, { img });
                return admin;
            }
            catch (error) {
                console.error('Error updating admin img:', error);
                throw new Error('Error updating admin img');
            }
        });
    }
}
exports.AuthAdministratorDataSourceImpl = AuthAdministratorDataSourceImpl;
