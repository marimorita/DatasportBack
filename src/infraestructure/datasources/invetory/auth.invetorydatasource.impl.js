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
exports.AuthInvetoryDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const domain_1 = require("../../../domain");
const invetory_mappers_1 = require("../../mappers/invetory/invetory.mappers");
const data_1 = require("../../../data");
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";
class AuthInvetoryDataSourceImpl {
    constructor() {
        this.invetoryRepository = ormconfig_1.AppDataSource.getRepository(data_1.InvetoryEntity);
    }
    register(registerInvetoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, quantity, state, idCenter } = registerInvetoryDto;
            try {
                const existingInvetory = yield this.invetoryRepository.findOne({ where: { name } });
                if (existingInvetory)
                    throw domain_1.CustomError.badRequest("User already exists");
                const newInvetory = this.invetoryRepository.create({
                    name: name,
                    quantity: quantity,
                    state: state,
                    idCenter: idCenter,
                });
                yield this.invetoryRepository.save(newInvetory);
                return invetory_mappers_1.InvetoryMapper.toDomain(newInvetory);
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
exports.AuthInvetoryDataSourceImpl = AuthInvetoryDataSourceImpl;
