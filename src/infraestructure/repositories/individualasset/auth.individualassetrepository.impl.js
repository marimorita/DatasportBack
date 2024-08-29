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
}
exports.AuthIndividualAssetsRepositoryImpl = AuthIndividualAssetsRepositoryImpl;
