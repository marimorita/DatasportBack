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
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthProductsController = AuthProductsController;
