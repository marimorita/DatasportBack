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
exports.AuthClientsController = void 0;
const domain_1 = require("../../../domain");
class AuthClientsController {
    constructor(authClientsRepository) {
        this.authClientsRepository = authClientsRepository;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Error del servidor' });
        };
        this.registerClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, registerClientDto] = domain_1.RegisterClientDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                const client = yield this.authClientsRepository.register(registerClientDto);
                res.json(client);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.getAllClients = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield this.authClientsRepository.getAllClients();
                res.json(clients);
            }
            catch (error) {
                console.log(error);
                this.handleError(error, res);
            }
        });
        this.getClientById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // Convertir el ID de string a number
            const clientId = parseInt(id, 10);
            if (isNaN(clientId)) {
                return res.status(400).json({ error: 'Formato de id invalido' });
            }
            try {
                const client = yield this.authClientsRepository.getClientById(clientId);
                if (!client) {
                    return res.status(404).json({ error: 'Cliente no existe' });
                }
                res.json(client);
            }
            catch (error) {
                // console.log(error);
                this.handleError(error, res);
            }
        });
        this.updateAllClientData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // ID del cliente desde los parámetros de la URL
            const updatedData = req.body; // Datos actualizados desde el cuerpo de la solicitud
            try {
                const client = yield this.authClientsRepository.updateClient(parseInt(id), updatedData);
                if (!client) {
                    return res.status(404).json({ error: 'No se encontro al cliente ' });
                }
                res.status(200).json(client);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateNameClientDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateNameClientDto] = domain_1.UpdateNameClientDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authClientsRepository.UpdateNameClientDto(updateNameClientDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateLastNameClientDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateLastNameClientDto] = domain_1.UpdateLastNameClientDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authClientsRepository.UpdateLastNameClientDto(updateLastNameClientDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateEmailClientDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateEmailClientDto] = domain_1.UpdateEmailClientDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authClientsRepository.UpdateEmailClientDto(updateEmailClientDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdatePhoneClientDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updatePhoneClientDto] = domain_1.UpdatePhoneClientDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authClientsRepository.UpdatePhoneClientDto(updatePhoneClientDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateAddressClientDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateAddressClientDto] = domain_1.UpdateAddressClientDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authClientsRepository.UpdateAddressClientDto(updateAddressClientDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.UpdateStateClientDto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, updateStateClientDto] = domain_1.UpdateStateClientDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            try {
                yield this.authClientsRepository.UpdateStateClientDto(updateStateClientDto);
                res.status(201).json({ message: 'Actualizacion exitosa!' });
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.updateClientImg = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('Received request to update client img');
            const id = parseInt(req.params.id, 10); // ID del cliente desde los parámetros de la URL
            const { img } = req.body; // Estado actualizado desde el cuerpo de la solicitud
            try {
                const client = yield this.authClientsRepository.updateClientImg(id, img);
                if (!client) {
                    return res.status(404).json({ error: 'Cliente no encontrado' });
                }
                res.status(200).json(client);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.AuthClientsController = AuthClientsController;
