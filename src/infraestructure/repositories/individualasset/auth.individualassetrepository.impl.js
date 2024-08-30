"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthIndividualAssetsRepositoryImpl = void 0;
class AuthIndividualAssetsRepositoryImpl {
    constructor(authIndividualAssetsDataSource) {
        this.authIndividualAssetsDataSource = authIndividualAssetsDataSource;
    }
    register(registerIndividualAssetsDto) {
        return this.authIndividualAssetsDataSource.register(registerIndividualAssetsDto);
    }
    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authEstablishmentDataSource.login(email, password);
    // }
    getAllIndividualAssetsById(id) {
        return this.authIndividualAssetsDataSource.getAllIndividualAssetsById(id);
    }
}
exports.AuthIndividualAssetsRepositoryImpl = AuthIndividualAssetsRepositoryImpl;
