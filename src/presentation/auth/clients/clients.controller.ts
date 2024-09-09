import { Request, Response } from "express";
import { RegisterClientDto, AuthClientsRepository, CustomError, UpdateAddressClientDto, UpdateEmailClientDto, UpdateLastNameClientDto, UpdateNameClientDto, UpdatePhoneClientDto, UpdateStateClientDto } from "../../../domain";
import { ClientsEntity } from "../../../data";
export class AuthClientsController {

    constructor(
        private readonly authClientsRepository: AuthClientsRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Error del servidor' });
    }

    registerClient = async (req: Request, res: Response) => {
        const [error, registerClientDto] = RegisterClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const client: ClientsEntity = await this.authClientsRepository.register(registerClientDto!)
            res.json(client)
        } catch (error) {
            this.handleError(error, res);
        }
    }

    getAllClients = async (req: Request, res: Response) => {
        try {
            const clients = await this.authClientsRepository.getAllClients();
            res.json(clients);
        } catch (error) {
            console.log(error);
            this.handleError(error, res);
        }
    }

    getClientById = async (req: Request, res: Response) => {
        const { id } = req.params;

        // Convertir el ID de string a number
        const clientId = parseInt(id, 10);

        if (isNaN(clientId)) {
            return res.status(400).json({ error: 'Formato de id invalido' });
        }

        try {
            const client = await this.authClientsRepository.getClientById(clientId);
            if (!client) {
                return res.status(404).json({ error: 'Cliente no existe' });
            }
            res.json(client);
        } catch (error) {
            // console.log(error);
            this.handleError(error, res);
        }
    }

    updateAllClientData = async (req: Request, res: Response) => {
        const { id } = req.params; // ID del cliente desde los parámetros de la URL
        const updatedData = req.body; // Datos actualizados desde el cuerpo de la solicitud

        try {
            const client = await this.authClientsRepository.updateClient(parseInt(id), updatedData);
            if (!client) {
                return res.status(404).json({ error: 'No se encontro al cliente ' });
            }
            res.status(200).json(client);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    UpdateNameClientDto = async (req: Request, res: Response) => {
        const [error, updateNameClientDto] = UpdateNameClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authClientsRepository.UpdateNameClientDto(updateNameClientDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }


    UpdateLastNameClientDto = async (req: Request, res: Response) => {
        const [error, updateLastNameClientDto] = UpdateLastNameClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authClientsRepository.UpdateLastNameClientDto(updateLastNameClientDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateEmailClientDto = async (req: Request, res: Response) => {
        const [error, updateEmailClientDto] = UpdateEmailClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authClientsRepository.UpdateEmailClientDto(updateEmailClientDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdatePhoneClientDto = async (req: Request, res: Response) => {
        const [error, updatePhoneClientDto] = UpdatePhoneClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authClientsRepository.UpdatePhoneClientDto(updatePhoneClientDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }


    UpdateAddressClientDto = async (req: Request, res: Response) => {
        const [error, updateAddressClientDto] = UpdateAddressClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authClientsRepository.UpdateAddressClientDto(updateAddressClientDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    UpdateStateClientDto = async (req: Request, res: Response) => {
        const [error, updateStateClientDto] = UpdateStateClientDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            await this.authClientsRepository.UpdateStateClientDto(updateStateClientDto!)
            res.status(201).json({ message: 'Actualizacion exitosa!' });
        } catch (error) {
            this.handleError(error, res);
        }
    }

    updateClientImg = async (req: Request, res: Response) => {
        console.log('Received request to update client img');
        const id = parseInt(req.params.id, 10); // ID del cliente desde los parámetros de la URL
        const { img } = req.body; // Estado actualizado desde el cuerpo de la solicitud

        try {
            const client = await this.authClientsRepository.updateClientImg(id, img);
            if (!client) {
                return res.status(404).json({ error: 'Cliente no encontrado' });
            }
            res.status(200).json(client);
        } catch (error) {
            this.handleError(error, res);
        }
    };
}