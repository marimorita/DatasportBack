import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
import { AuthClientsDataSource, CustomError, RegisterClientDto, UpdateAddressClientDto, UpdateEmailClientDto, UpdateLastNameClientDto, UpdateNameClientDto, UpdatePhoneClientDto, UpdateStateClientDto} from "../../../domain";
import { ClientMapper } from "../../mappers/clients/client.mappers";
import { ClientsEntity } from "../../../data";
import { envs } from '../../../config';
import jwt from 'jsonwebtoken';

export class AuthClientsDataSourceImpl implements AuthClientsDataSource {
    private readonly clientRepository: Repository<ClientsEntity>;

    constructor() {
        this.clientRepository = AppDataSource.getRepository(ClientsEntity);
    }
    
    async register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        const { id, name, lastName, email, phone, address, idCenter, state, img } = registerClientDto;

        // const hashedPassword = BcryptAdapter.hash(password);
        
        try {

            const existingClient = await this.clientRepository.findOne({ where: { email } });
            if (existingClient) throw CustomError.badRequest("Este usuario ya existe")

            const newClient = this.clientRepository.create({
                id: id,
                name: name,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone,
                // assistance: assistance,
                // password: hashedPassword,
                idCenter: idCenter,
                state: state,
                img: img,
            });
           
            await this.clientRepository.save(newClient);

            return ClientMapper.toDomain(newClient);
            
        } catch (error) {
            console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async getAllClients(): Promise<ClientsEntity[]> {
        try {
            return await this.clientRepository.find();
        } catch (error) {
            throw CustomError.internalServer();
        }
    }

    async getClientById(id: number): Promise<ClientsEntity | null> {
        try {
            return await this.clientRepository.findOne({ where: { id } });
        } catch (error) {
            console.error("Error fetching client by ID:", error);
            throw CustomError.internalServer();
        }
    }

    async updateClient(id: number, updatedData: Partial<ClientsEntity>): Promise<ClientsEntity | null> {
        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                throw new Error('Client not found');
            }

            // Actualiza los datos del cliente
            Object.assign(client, updatedData);
            await this.clientRepository.save(client);
            return client;
        } catch (error) {
            console.error('Error updating client:', error);
            throw new Error('Error updating client');
        }
    }

    async UpdateNameClientDto(updateNameClientDto: UpdateNameClientDto): Promise<ClientsEntity | null> {
        const { id, name } = updateNameClientDto;

        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }

            await this.clientRepository.update({id}, { name });
            return client;
        } catch (error) {
            console.error('Error updating client name:', error);
            throw new Error('Error updating client name');
        }
    }

    async UpdateLastNameClientDto(updateLastNameClientDto: UpdateLastNameClientDto): Promise<ClientsEntity | null> {
        const { id, lastName } = updateLastNameClientDto;

        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }

            await this.clientRepository.update({id}, { lastName });
            return client;
        } catch (error) {
            console.error('Error updating client phone:', error);
            throw new Error('Error updating client phone');
        }
    }

    async UpdateEmailClientDto(updateEmailClientDto: UpdateEmailClientDto): Promise<ClientsEntity | null> {
        const { id, email } = updateEmailClientDto;

        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }

            await this.clientRepository.update({id}, { email });
            return client;
        } catch (error) {
            console.error('Error updating client email:', error);
            throw new Error('Error updating client email');
        }
    }

    async UpdatePhoneClientDto(updatePhoneClientDto: UpdatePhoneClientDto): Promise<ClientsEntity | null> {
        const { id, phone } = updatePhoneClientDto;

        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }

            await this.clientRepository.update({id}, { phone });
            return client;
        } catch (error) {
            console.error('Error updating client phone:', error);
            throw new Error('Error updating client phone');
        }
    }

    async UpdateAddressClientDto(updateAddressClientDto: UpdateAddressClientDto): Promise<ClientsEntity | null> {
        const { id, address } = updateAddressClientDto;

        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }

            await this.clientRepository.update({id}, { address });
            return client;
        } catch (error) {
            console.error('Error updating client address:', error);
            throw new Error('Error updating client address');
        }
    }

    async UpdateStateClientDto(updateStateClientDto: UpdateStateClientDto): Promise<ClientsEntity | null> {
        const { id, state } = updateStateClientDto;

        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }

            await this.clientRepository.update({id}, { state });
            return client;
        } catch (error) {
            console.error('Error updating client state:', error);
            throw new Error('Error updating client state');
        }
    }

    async updateClientImg(id: number, img: string): Promise<ClientsEntity | null> {
        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }
    
            await this.clientRepository.update(id, { img });
            return client;
        } catch (error) {
            console.error('Error updating client img:', error);
            throw new Error('Error updating client img');
        }
    }

}