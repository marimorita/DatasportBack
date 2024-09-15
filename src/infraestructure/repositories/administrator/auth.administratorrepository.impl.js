"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdministratorRepositoryImpl = void 0;
class AuthAdministratorRepositoryImpl {
    constructor(authAdministratorDataSource) {
        this.authAdministratorDataSource = authAdministratorDataSource;
    }
    register(registerAdministratorDto) {
        return this.authAdministratorDataSource.register(registerAdministratorDto);
    }
    login(loginAdministratorDto) {
        return this.authAdministratorDataSource.login(loginAdministratorDto);
    }
    getAdministratorByEmail(email) {
        return this.authAdministratorDataSource.getAdministratorByEmail(email); // Implementa esta lógica en el DataSource
    }
    updateAdministratorName(updateNameAdministratorDto) {
        return this.authAdministratorDataSource.updateAdministratorName(updateNameAdministratorDto);
    }
    // updateAdministratorId(updateIdAdministratorDto:UpdateIdAdministratorDto): Promise<AdministratorEntity | null> {
    //     return this.authAdministratorDataSource.updateAdministratorId(updateIdAdministratorDto);
    // }
    updateAdministratorPhone(updatePhoneAdministratorDto) {
        return this.authAdministratorDataSource.updateAdministratorPhone(updatePhoneAdministratorDto);
    }
    updateAdministratorEmail(updateEmailAdministratorDto) {
        return this.authAdministratorDataSource.updateAdministratorEmail(updateEmailAdministratorDto);
    }
    updateAdministratorImg(id, img) {
        return this.authAdministratorDataSource.updateAdministratorImg(id, img);
    }
}
exports.AuthAdministratorRepositoryImpl = AuthAdministratorRepositoryImpl;
