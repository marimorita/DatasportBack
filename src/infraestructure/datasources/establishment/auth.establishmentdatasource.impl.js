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
exports.AuthEstablishmentDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const domain_1 = require("../../../domain");
const establishment_mappers_1 = require("../../mappers/establishment/establishment.mappers");
const data_1 = require("../../../data");
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";
class AuthEstablishmentDataSourceImpl {
    constructor() {
        this.establishmentRepository = ormconfig_1.AppDataSource.getRepository(data_1.EstablishmentEntity);
    }
    register(registerEstablishmentDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, address, phone } = registerEstablishmentDto;
            try {
                const existingEstablishment = yield this.establishmentRepository.findOne({ where: { email } });
                if (existingEstablishment)
                    throw domain_1.CustomError.badRequest("User already exists");
                const newEstablishment = this.establishmentRepository.create({
                    name: name,
                    email: email,
                    address: address,
                    phone: phone,
                });
                yield this.establishmentRepository.save(newEstablishment);
                return establishment_mappers_1.EstablishmentMapper.toDomain(newEstablishment);
            }
            catch (error) {
                // console.error("Error registering client:", error);
                if (error instanceof domain_1.CustomError) {
                    throw error;
                }
                throw domain_1.CustomError.internalServer();
            }
        });
    }
}
exports.AuthEstablishmentDataSourceImpl = AuthEstablishmentDataSourceImpl;
