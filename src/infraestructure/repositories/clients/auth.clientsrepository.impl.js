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
    updateClientStatus(id, state) {
        return this.authClientsDataSource.updateClientStatus(id, state);
    }
    updateClientImg(id, img) {
        return this.authClientsDataSource.updateClientImg(id, img);
    }
}
exports.AuthClientsRepositoryImpl = AuthClientsRepositoryImpl;
