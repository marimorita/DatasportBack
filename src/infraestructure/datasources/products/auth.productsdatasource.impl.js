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
exports.AuthProductsDataSourceImpl = void 0;
const ormconfig_1 = require("../../../data/mysql/ormconfig");
const domain_1 = require("../../../domain");
const products_mappers_1 = require("../../mappers/products/products.mappers");
const data_1 = require("../../../data");
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";
class AuthProductsDataSourceImpl {
    constructor() {
        this.productsRepository = ormconfig_1.AppDataSource.getRepository(data_1.ProductsEntity);
    }
    register(registerProductsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, state, stock, img, price, idCenter } = registerProductsDto;
            try {
                const existingProducts = yield this.productsRepository.findOne({ where: { name } });
                if (existingProducts)
                    throw domain_1.CustomError.badRequest("Este producto ya existe");
                const newProducts = this.productsRepository.create({
                    name: name,
                    description: description,
                    state: state,
                    stock: stock,
                    img: img,
                    price: price,
                    idCenter: idCenter,
                });
                yield this.productsRepository.save(newProducts);
                return products_mappers_1.ProductsMapper.toDomain(newProducts);
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
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productsRepository.find();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    getProductsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productsRepository.findOne({ where: { id } });
            }
            catch (error) {
                console.error("Error fetching client by ID:", error);
                throw domain_1.CustomError.internalServer();
            }
        });
    }
    UpdateNameProductsDto(updateNameProductsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = updateNameProductsDto;
            try {
                const products = yield this.productsRepository.findOneBy({ id });
                if (!products) {
                    return null;
                }
                yield this.productsRepository.update({ id }, { name });
                return products;
            }
            catch (error) {
                console.error('Error updating products stock:', error);
                throw new Error('Error updating products stock');
            }
        });
    }
    UpdateDescriptionProductsDto(updateDescriptionProductsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, description } = updateDescriptionProductsDto;
            try {
                const products = yield this.productsRepository.findOneBy({ id });
                if (!products) {
                    return null;
                }
                yield this.productsRepository.update({ id }, { description });
                return products;
            }
            catch (error) {
                console.error('Error updating products stock:', error);
                throw new Error('Error updating products stock');
            }
        });
    }
    UpdateStateProductsDto(updateStateProductsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, state } = updateStateProductsDto;
            try {
                const products = yield this.productsRepository.findOneBy({ id });
                if (!products) {
                    return null;
                }
                yield this.productsRepository.update({ id }, { state });
                return products;
            }
            catch (error) {
                console.error('Error updating products stock:', error);
                throw new Error('Error updating products stock');
            }
        });
    }
    UpdateStockProductsDto(updateStockProductsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, stock } = updateStockProductsDto;
            try {
                const products = yield this.productsRepository.findOneBy({ id });
                if (!products) {
                    return null;
                }
                yield this.productsRepository.update({ id }, { stock });
                return products;
            }
            catch (error) {
                console.error('Error updating products stock:', error);
                throw new Error('Error updating products stock');
            }
        });
    }
    UpdateImgProductsDto(updateImgProductsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, img } = updateImgProductsDto;
            try {
                const products = yield this.productsRepository.findOneBy({ id });
                if (!products) {
                    return null;
                }
                yield this.productsRepository.update({ id }, { img });
                return products;
            }
            catch (error) {
                console.error('Error updating products stock:', error);
                throw new Error('Error updating products stock');
            }
        });
    }
    UpdatePriceProductsDto(updatePriceProductsDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, price } = updatePriceProductsDto;
            try {
                const products = yield this.productsRepository.findOneBy({ id });
                if (!products) {
                    return null;
                }
                yield this.productsRepository.update({ id }, { price });
                return products;
            }
            catch (error) {
                console.error('Error updating products stock:', error);
                throw new Error('Error updating products stock');
            }
        });
    }
}
exports.AuthProductsDataSourceImpl = AuthProductsDataSourceImpl;
