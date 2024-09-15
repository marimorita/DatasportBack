"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthClientsRepositoryImpl = void 0;
class AuthClientsRepositoryImpl {
    constructor(authClientsDataSource) {
        this.authClientsDataSource = authClientsDataSource;
    }
    register(registerClientDto) {
        return this.authClientsDataSource.register(registerClientDto);
    }
    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authClientsDataSource.login(email, password);
    // }
    getAllClients() {
        return this.authClientsDataSource.getAllClients();
    }
    getClientById(id) {
        return this.authClientsDataSource.getClientById(id);
    }
    updateClient(id, updatedData) {
        return this.authClientsDataSource.updateClient(id, updatedData);
    }
    UpdateNameClientDto(updateNameClientDto) {
        return this.authClientsDataSource.UpdateNameClientDto(updateNameClientDto);
    }
    UpdateLastNameClientDto(updateLastNameClientDto) {
        return this.authClientsDataSource.UpdateLastNameClientDto(updateLastNameClientDto);
    }
    UpdateEmailClientDto(updateEmailClientDto) {
        return this.authClientsDataSource.UpdateEmailClientDto(updateEmailClientDto);
    }
    UpdatePhoneClientDto(updatePhoneClientDto) {
        return this.authClientsDataSource.UpdatePhoneClientDto(updatePhoneClientDto);
    }
    UpdateAddressClientDto(updateAddressClientDto) {
        return this.authClientsDataSource.UpdateAddressClientDto(updateAddressClientDto);
    }
    UpdateStateClientDto(updateStateClientDto) {
        return this.authClientsDataSource.UpdateStateClientDto(updateStateClientDto);
    }
    updateClientImg(id, img) {
        return this.authClientsDataSource.updateClientImg(id, img);
    }
}
exports.AuthClientsRepositoryImpl = AuthClientsRepositoryImpl;
