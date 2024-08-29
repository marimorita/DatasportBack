"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAssetsRepositoryImpl = void 0;
class AuthAssetsRepositoryImpl {
    constructor(authAssetsDataSource) {
        this.authAssetsDataSource = authAssetsDataSource;
    }
    register(registerAssetsDto) {
        return this.authAssetsDataSource.register(registerAssetsDto);
    }
    getAssetsById(id) {
        return this.authAssetsDataSource.getAssetsById(id);
    }
}
exports.AuthAssetsRepositoryImpl = AuthAssetsRepositoryImpl;
