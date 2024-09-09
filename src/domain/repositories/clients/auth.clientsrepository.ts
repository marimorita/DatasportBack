import { RegisterClientDto, UpdateAddressClientDto, UpdateEmailClientDto, UpdateLastNameClientDto, UpdateNameClientDto, UpdatePhoneClientDto, UpdateStateClientDto } from "../../dto/auth/clients/register-clietns.dto";
import { ClientsEntity } from "../../../data/entities/auth/clients/clients.entity";

export abstract class AuthClientsRepository {
    abstract register(registerClientDto:RegisterClientDto): Promise<ClientsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
    abstract getAllClients(): Promise<ClientsEntity[]>;

    abstract getClientById(id: number): Promise<ClientsEntity | null>;

    abstract updateClient(id: number, updatedData: Partial<ClientsEntity>): Promise<ClientsEntity | null>
    
    abstract UpdateNameClientDto(updateNameClientDto: UpdateNameClientDto): Promise<ClientsEntity | null>
    abstract UpdateLastNameClientDto(updateLastNameClientDto: UpdateLastNameClientDto): Promise<ClientsEntity | null>
    abstract UpdateEmailClientDto(updateEmailClientDto: UpdateEmailClientDto): Promise<ClientsEntity | null>
    abstract UpdatePhoneClientDto(updatePhoneClientDto: UpdatePhoneClientDto): Promise<ClientsEntity | null>
    abstract UpdateAddressClientDto(updateAddressClientDto: UpdateAddressClientDto): Promise<ClientsEntity | null>
    abstract UpdateStateClientDto(updateStateClientDto: UpdateStateClientDto): Promise<ClientsEntity | null>
    abstract updateClientImg(id: number, img: string): Promise<ClientsEntity | null>

} 