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
exports.AuthIndividualAssetsController = void 0;
const domain_1 = require("../../../domain");
class AuthIndividualAssetsController {
    constructor(authIndividualAssetsRepository) {
        this.authIndividualAssetsRepository = authIndividualAssetsRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Error del servidor ' });
        };
        this.registerIndividualAssets = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerIndividualAssetsDto] = domain_1.RegisterIndividualAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                const assets = yield this.authIndividualAssetsRepository.register(registerIndividualAssetsDto);
                res.json(assets);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.getAllIndividualAssetsById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // Convertir el ID de string a number
            const individualassetidAssets = parseInt(id, 10);
            if (isNaN(individualassetidAssets)) {
                return res.status(400).json({ error: 'Formato de id invalido' });
            }
            try {
                const individualasset = yield this.authIndividualAssetsRepository.getAllIndividualAssetsById(individualassetidAssets);
                if (!individualasset) {
                    return res.status(404).json({ error: 'Este bien individual no existe' });
                }
                res.json(individualasset);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateIndividualAssetsName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateNameIndividualAssetsDto] = domain_1.UpdateNameIndividualAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authIndividualAssetsRepository.updateIndividualAssetsName(updateNameIndividualAssetsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateIndividualAssetsDescription = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateDescriptionIndividualAssetsDto] = domain_1.UpdateDescriptionIndividualAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authIndividualAssetsRepository.updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateIndividualAssetsImg = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateImgIndividualAssetsDto] = domain_1.UpdateImgIndividualAssetsDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authIndividualAssetsRepository.updateIndividualAssetsImg(updateImgIndividualAssetsDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthIndividualAssetsController = AuthIndividualAssetsController;
