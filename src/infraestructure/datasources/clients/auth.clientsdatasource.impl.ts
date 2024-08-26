import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
import { AuthClientsDataSource, CustomError, RegisterClientDto} from "../../../domain";
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

    async updateClientStatus(id: number, state: string): Promise<ClientsEntity | null> {
        try {
            const client = await this.clientRepository.findOneBy({ id });
            if (!client) {
                return null;
            }
    
            await this.clientRepository.update(id, { state });
            return client;
        } catch (error) {
            console.error('Error updating client status:', error);
            throw new Error('Error updating client status');
        }
    }

    // async   login(email:string, password: string): Promise<{ token: string, message: string }> {
    //     try {
    //         const client = await this.clientRepository.findOne({ where: { email }});
    //         if (!client) throw CustomError.badRequest("Invalid crendetials");

    //         if (!client.password) throw CustomError.unauthorized("Invalid credentials");
            
    //         const isPasswordValid = BcryptAdapter.compare(password, client.password);
    //         if (!isPasswordValid) throw CustomError.unauthorized("Invalid crendetials");

    //         const token = jwt.sign({ id: client.id, email: client.email}, envs.JWT_SECRET,{
    //             expiresIn: '1h',
    //         });

    //         return {
    //             token,
    //             message: "Login successful"
    //         };
    //     } catch (error) {
    //         if (error instanceof CustomError) {
    //             throw error;
    //         }
    //         throw CustomError.internalServer();
    //     }
    // }

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