
import { ClientsEntity } from "../../../data";
import { AuthClientsDataSource, AuthClientsRepository, RegisterClientDto } from "../../../domain";
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

    updateClientStatus(id: number, state: string): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.updateClientStatus(id, state);
    }

    updateClientImg(id: number, img: string): Promise<ClientsEntity | null> {
        return this.authClientsDataSource.updateClientImg(id, img);
    }
}