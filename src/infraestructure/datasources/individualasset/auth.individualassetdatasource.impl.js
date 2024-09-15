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
exports.AuthIndividualAssetsDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const domain_1 = require("../../../domain");
const individualasset_mappers_1 = require("../../mappers/individualasset/individualasset.mappers");
const data_1 = require("../../../data");
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";
class AuthIndividualAssetsDataSourceImpl {
    constructor() {
        this.individualAssetsRepository = ormconfig_1.AppDataSource.getRepository(data_1.IndividualAssetsEntity);
    }
    register(registerIndividualAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets } = registerIndividualAssetsDto;
            try {
                const newAssets = this.individualAssetsRepository.create({
                    name: name,
                    description: description,
                    adquisitionDate: adquisitionDate,
                    state: state,
                    condition: condition,
                    img: img,
                    lastMaintenance: lastMaintenance,
                    nextMaintenance: nextMaintenance,
                    idAssets: idAssets,
                });
                yield this.individualAssetsRepository.save(newAssets);
                return individualasset_mappers_1.IndividualAssetsMapper.toDomain(newAssets);
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
    getAllIndividualAssetsById(idAssets) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.individualAssetsRepository.find({ where: { idAssets } });
            }
            catch (error) {
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    updateIndividualAssetsName(updateNameIndividualAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = updateNameIndividualAssetsDto;
            try {
                const assets = yield this.individualAssetsRepository.findOneBy({ id });
                if (!assets) {
                    return null;
                }
                yield this.individualAssetsRepository.update({ id }, { name });
                return assets;
            }
            catch (error) {
                console.error('Error updating assets stock:', error);
                throw new Error('Error updating assets stock');
            }
        });
    }
    updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, description } = updateDescriptionIndividualAssetsDto;
            try {
                const assets = yield this.individualAssetsRepository.findOneBy({ id });
                if (!assets) {
                    return null;
                }
                yield this.individualAssetsRepository.update({ id }, { description });
                return assets;
            }
            catch (error) {
                console.error('Error updating assets stock:', error);
                throw new Error('Error updating assets stock');
            }
        });
    }
    updateIndividualAssetsImg(updateImgIndividualAssetsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, img } = updateImgIndividualAssetsDto;
            try {
                const assets = yield this.individualAssetsRepository.findOneBy({ id });
                if (!assets) {
                    return null;
                }
                yield this.individualAssetsRepository.update({ id }, { img });
                return assets;
            }
            catch (error) {
                console.error('Error updating assets stock:', error);
                throw new Error('Error updating assets stock');
            }
        });
    }
}
exports.AuthIndividualAssetsDataSourceImpl = AuthIndividualAssetsDataSourceImpl;
