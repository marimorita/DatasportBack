"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEstablishmentRepositoryImpl = void 0;
class AuthEstablishmentRepositoryImpl {
    constructor(authEstablishmentDataSource) {
        this.authEstablishmentDataSource = authEstablishmentDataSource;
    }
    register(registerEstablishmentDto) {
        return this.authEstablishmentDataSource.register(registerEstablishmentDto);
    }
}
exports.AuthEstablishmentRepositoryImpl = AuthEstablishmentRepositoryImpl;
