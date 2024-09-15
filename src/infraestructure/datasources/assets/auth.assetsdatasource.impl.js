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
exports.AuthAssetsDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const domain_1 = require("../../../domain");
const assets_mappers_1 = require("../../mappers/assets/assets.mappers");
const data_1 = require("../../../data");
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";
class AuthAssetsDataSourceImpl {
    constructor() {
        this.assetsRepository = ormconfig_1.AppDataSource.getRepository(data_1.AssetsEntity);
    }
    register(registerAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, description, img, stock } = registerAssetsDto;
            try {
                const existingAssets = yield this.assetsRepository.findOne({ where: { id } });
                if (existingAssets)
                    throw domain_1.CustomError.badRequest("Este bien ya existe");
                const newAssets = this.assetsRepository.create({
                    id: id,
                    name: name,
                    description: description,
                    img: img,
                    stock: stock,
                });
                yield this.assetsRepository.save(newAssets);
                return assets_mappers_1.AssetsMapper.toDomain(newAssets);
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
    getAllAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.assetsRepository.find();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    getAssetsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.assetsRepository.findOne({ where: { id } });
            }
            catch (error) {
                console.error("Error fetching client by ID:", error);
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    updateAssetsStock(updateStockAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, stock } = updateStockAssetsDto;
            try {
                const admin = yield this.assetsRepository.findOneBy({ id });
                if (!admin) {
                    return null;
                }
                yield this.assetsRepository.update({ id }, { stock });
                return admin;
            }
            catch (error) {
                console.error('Error updating assets stock:', error);
                throw new Error('Error updating assets stock');
            }
        });
    }
    updateAssetsName(updateNameAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = updateNameAssetsDto;
            try {
                const assets = yield this.assetsRepository.findOneBy({ id });
                if (!assets) {
                    return null;
                }
                yield this.assetsRepository.update({ id }, { name });
                return assets;
            }
            catch (error) {
                console.error('Error updating assets stock:', error);
                throw new Error('Error updating assets stock');
            }
        });
    }
    updateAssetsDescription(updateDescriptionAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, description } = updateDescriptionAssetsDto;
            try {
                const assets = yield this.assetsRepository.findOneBy({ id });
                if (!assets) {
                    return null;
                }
                yield this.assetsRepository.update({ id }, { description });
                return assets;
            }
            catch (error) {
                console.error('Error updating assets stock:', error);
                throw new Error('Error updating assets stock');
            }
        });
    }
    updateAssetsImg(updateImgAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, img } = updateImgAssetsDto;
            try {
                const assets = yield this.assetsRepository.findOneBy({ id });
                if (!assets) {
                    return null;
                }
                yield this.assetsRepository.update({ id }, { img });
                return assets;
            }
            catch (error) {
                console.error('Error updating assets stock:', error);
                throw new Error('Error updating assets stock');
            }
        });
    }
}
exports.AuthAssetsDataSourceImpl = AuthAssetsDataSourceImpl;
