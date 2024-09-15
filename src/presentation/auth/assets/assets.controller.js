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
exports.AuthAssetsController = void 0;
const domain_1 = require("../../../domain");
class AuthAssetsController {
    constructor(authAssetsRepository) {
        this.authAssetsRepository = authAssetsRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Error del servidor ' });
        };
        this.registerAssets = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerAssetsDto] = domain_1.RegisterAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                const assets = yield this.authAssetsRepository.register(registerAssetsDto);
                res.json(assets);
            }
            catch (error) {
                console.error("Error registering client:", error);
                this.handleError(error, res);
            }
        });
        this.getAssetsById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // Convertir el ID de string a number
            const assetsId = parseInt(id, 10);
            if (isNaN(assetsId)) {
                return res.status(400).json({ error: 'Formato de id invalido' });
            }
            try {
                const assets = yield this.authAssetsRepository.getAssetsById(assetsId);
                if (!assets) {
                    return res.status(404).json({ error: 'Este bien no existe' });
                }
                res.json(assets);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.getAllAssets = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const assets = yield this.authAssetsRepository.getAllAssets();
                res.json(assets);
            }
            catch (error) {
                console.log(error);
                this.handleError(error, res);
            }
        });
        this.updateAssetsStock = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateStockAssetsDto] = domain_1.UpdateStockAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authAssetsRepository.updateAssetsStock(updateStockAssetsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateAssetsName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateNameAssetsDto] = domain_1.UpdateNameAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authAssetsRepository.updateAssetsName(updateNameAssetsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateAssetsDescription = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateDescriptionAssetsDto] = domain_1.UpdateDescriptionAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authAssetsRepository.updateAssetsDescription(updateDescriptionAssetsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateAssetsImg = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateImgAssetsDto] = domain_1.UpdateImgAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authAssetsRepository.updateAssetsImg(updateImgAssetsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthAssetsController = AuthAssetsController;
