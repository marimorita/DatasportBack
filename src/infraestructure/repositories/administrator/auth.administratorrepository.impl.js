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
    updateAdministratorImg(id, img) {
        return this.authAdministratorDataSource.updateAdministratorImg(id, img);
    }
}
exports.AuthAdministratorRepositoryImpl = AuthAdministratorRepositoryImpl;
