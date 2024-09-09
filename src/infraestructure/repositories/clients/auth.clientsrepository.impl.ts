
import { ClientsEntity } from "../../../data";
import { AuthClientsDataSource, AuthClientsRepository, RegisterClientDto, UpdateAddressClientDto, UpdateEmailClientDto, UpdateLastNameClientDto, UpdateNameClientDto, UpdatePhoneClientDto, UpdateStateClientDto } from "../../../domain";
export class AuthClientsRepositoryImpl implements AuthClientsRepository {

    constructor(
        private readonly authClientsDataSource: AuthClientsDataSource,
    ){}

    register(registerClientDto: RegisterClientDto): Promise<ClientsEntity> {
        return this.authClientsDataSource.register(registerClientDto);
    }

    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authClientsDataSource.login(email, password);
    // }

    getAllClients(): Promise<ClientsEntity[]> {
        return this.authClientsDataSource.getAllClients();
    }

    getClientById(id: number): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.getClientById(id);
    }

    updateClient(id: number, updatedData: Partial<ClientsEntity>): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.updateClient(id, updatedData);
    }

    UpdateNameClientDto(updateNameClientDto:UpdateNameClientDto): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.UpdateNameClientDto(updateNameClientDto);
    }
    UpdateLastNameClientDto(updateLastNameClientDto:UpdateLastNameClientDto): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.UpdateLastNameClientDto(updateLastNameClientDto);
    }

    UpdateEmailClientDto(updateEmailClientDto:UpdateEmailClientDto): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.UpdateEmailClientDto(updateEmailClientDto);
    }

    UpdatePhoneClientDto(updatePhoneClientDto:UpdatePhoneClientDto): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.UpdatePhoneClientDto(updatePhoneClientDto);
    }
    UpdateAddressClientDto(updateAddressClientDto:UpdateAddressClientDto): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.UpdateAddressClientDto(updateAddressClientDto);
    }

    UpdateStateClientDto(updateStateClientDto:UpdateStateClientDto): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.UpdateStateClientDto(updateStateClientDto);
    }

    updateClientImg(id: number, img: string): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.updateClientImg(id, img);
    }
}