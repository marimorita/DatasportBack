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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClientsDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const domain_1 = require("../../../domain");
const client_mappers_1 = require("../../mappers/clients/client.mappers");
const data_1 = require("../../../data");
class AuthClientsDataSourceImpl {
    constructor() {
        this.clientRepository = ormconfig_1.AppDataSource.getRepository(data_1.ClientsEntity);
    }
    register(registerClientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, lastName, email, phone, address, idCenter, state, img } = registerClientDto;
            // const hashedPassword = BcryptAdapter.hash(password);
            try {
                const existingClient = yield this.clientRepository.findOne({ where: { email } });
                if (existingClient)
                    throw domain_1.CustomError.badRequest("Este usuario ya existe");
                const newClient = this.clientRepository.create({
                    id: id,
                    name: name,
                    lastName: lastName,
                    email: email,
                    address: address,
                    phone: phone,
                    // assistance: assistance,
                    // password: hashedPassword,
                    idCenter: idCenter,
                    state: state,
                    img: img,
                });
                yield this.clientRepository.save(newClient);
                return client_mappers_1.ClientMapper.toDomain(newClient);
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
    getAllClients() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.clientRepository.find();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.clientRepository.findOne({ where: { id } });
            }
            catch (error) {
                console.error("Error fetching client by ID:", error);
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    updateClient(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    throw new Error('Client not found');
                }
                // Actualiza los datos del cliente
                Object.assign(client, updatedData);
                yield this.clientRepository.save(client);
                return client;
            }
            catch (error) {
                console.error('Error updating client:', error);
                throw new Error('Error updating client');
            }
        });
    }
    updateClientStatus(id, state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update(id, { state });
                return client;
            }
            catch (error) {
                console.error('Error updating client status:', error);
                throw new Error('Error updating client status');
            }
        });
    }
    // async   login(email:string, password: string): Promise<{ token: string, message: string }> {
    //     try {
    //         const client = await this.clientRepository.findOne({ where: { email }});
    //         if (!client) throw CustomError.badRequest("Invalid crendetials");
    //         if (!client.password) throw CustomError.unauthorized("Invalid credentials");
    //         const isPasswordValid = BcryptAdapter.compare(password, client.password);
    //         if (!isPasswordValid) throw CustomError.unauthorized("Invalid crendetials");
    //         const token = jwt.sign({ id: client.id, email: client.email}, envs.JWT_SECRET,{
    //             expiresIn: '1h',
    //         });
    //         return {
    //             token,
    //             message: "Login successful"
    //         };
    //     } catch (error) {
    //         if (error instanceof CustomError) {
    //             throw error;
    //         }
    //         throw CustomError.internalServer();
    //     }
    // }
    updateClientImg(id, img) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update(id, { img });
                return client;
            }
            catch (error) {
                console.error('Error updating client img:', error);
                throw new Error('Error updating client img');
            }
        });
    }
}
exports.AuthClientsDataSourceImpl = AuthClientsDataSourceImpl;
