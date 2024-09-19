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
exports.AuthProductsController = void 0;
const domain_1 = require("../../../domain");
class AuthProductsController {
    constructor(authProductsRepository) {
        this.authProductsRepository = authProductsRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Error del servidor ' });
        };
        this.registerProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerProductsDto] = domain_1.RegisterProductsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                const products = yield this.authProductsRepository.register(registerProductsDto);
                res.json(products);
            }
            catch (error) {
                console.log(error);
                this.handleError(error, res);
            }
        });
        this.getAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.authProductsRepository.getAllProducts();
                res.json(products);
            }
            catch (error) {
                console.log(error);
                this.handleError(error, res);
            }
        });
        this.getProductsById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // Convertir el ID de string a number
            const productsId = parseInt(id, 10);
            if (isNaN(productsId)) {
                return res.status(400).json({ error: 'Formato de id invalido' });
            }
            try {
                const products = yield this.authProductsRepository.getProductsById(productsId);
                if (!products) {
                    return res.status(404).json({ error: 'Este producto no existe' });
                }
                res.json(products);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateNameProductsDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateNameProductsDto] = domain_1.UpdateNameProductsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authProductsRepository.UpdateNameProductsDto(updateNameProductsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateDescriptionProductsDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateDescriptionProductsDto] = domain_1.UpdateDescriptionProductsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authProductsRepository.UpdateDescriptionProductsDto(updateDescriptionProductsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateStateProductsDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateStateProductsDto] = domain_1.UpdateStateProductsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authProductsRepository.UpdateStateProductsDto(updateStateProductsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateStockProductsDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateStockProductsDto] = domain_1.UpdateStockProductsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authProductsRepository.UpdateStockProductsDto(updateStockProductsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateImgProductsDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateImgProductsDto] = domain_1.UpdateImgProductsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authProductsRepository.UpdateImgProductsDto(updateImgProductsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdatePriceProductsDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updatePriceProductsDto] = domain_1.UpdatePriceProductsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authProductsRepository.UpdatePriceProductsDto(updatePriceProductsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthProductsController = AuthProductsController;
