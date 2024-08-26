import { RegisterClientDto } from "../../dto/auth/clients/register-clietns.dto";
import { ClientsEntity } from "../../../data/entities/auth/clients/clients.entity";

export abstract class AuthClientsRepository {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
    abstract getAllClients(): Promise<ClientsEntity[]>;

    abstract getClientById(id: number): Promise<ClientsEntity | null>;

    abstract updateClient(id: number, updatedData: Partial<ClientsEntity>): Promise<ClientsEntity | null>
    
    abstract updateClientStatus(id: number, state: string): Promise<ClientsEntity | null>
    
    abstract updateClientImg(id: number, img: string): Promise<ClientsEntity | null>

} 