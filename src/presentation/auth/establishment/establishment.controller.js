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
exports.AuthEstablishmentController = void 0;
const domain_1 = require("../../../domain");
class AuthEstablishmentController {
    constructor(authEstablishmentRepository) {
        this.authEstablishmentRepository = authEstablishmentRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.registerEstablishment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerEstablishmentDto] = domain_1.RegisterEstablishmentDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                const establishment = yield this.authEstablishmentRepository.register(registerEstablishmentDto);
                res.json(establishment);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthEstablishmentController = AuthEstablishmentController;
