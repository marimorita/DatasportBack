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
    UpdateNameClientDto(updateNameClientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = updateNameClientDto;
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update({ id }, { name });
                return client;
            }
            catch (error) {
                console.error('Error updating client name:', error);
                throw new Error('Error updating client name');
            }
        });
    }
    UpdateLastNameClientDto(updateLastNameClientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, lastName } = updateLastNameClientDto;
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update({ id }, { lastName });
                return client;
            }
            catch (error) {
                console.error('Error updating client phone:', error);
                throw new Error('Error updating client phone');
            }
        });
    }
    UpdateEmailClientDto(updateEmailClientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, email } = updateEmailClientDto;
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update({ id }, { email });
                return client;
            }
            catch (error) {
                console.error('Error updating client email:', error);
                throw new Error('Error updating client email');
            }
        });
    }
    UpdatePhoneClientDto(updatePhoneClientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, phone } = updatePhoneClientDto;
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update({ id }, { phone });
                return client;
            }
            catch (error) {
                console.error('Error updating client phone:', error);
                throw new Error('Error updating client phone');
            }
        });
    }
    UpdateAddressClientDto(updateAddressClientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, address } = updateAddressClientDto;
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update({ id }, { address });
                return client;
            }
            catch (error) {
                console.error('Error updating client address:', error);
                throw new Error('Error updating client address');
            }
        });
    }
    UpdateStateClientDto(updateStateClientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, state } = updateStateClientDto;
            try {
                const client = yield this.clientRepository.findOneBy({ id });
                if (!client) {
                    return null;
                }
                yield this.clientRepository.update({ id }, { state });
                return client;
            }
            catch (error) {
                console.error('Error updating client state:', error);
                throw new Error('Error updating client state');
            }
        });
    }
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
