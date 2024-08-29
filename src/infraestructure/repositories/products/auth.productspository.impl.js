"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProductsRepositoryImpl = void 0;
class AuthProductsRepositoryImpl {
    constructor(authProductsDataSource) {
        this.authProductsDataSource = authProductsDataSource;
    }
    register(registerProductsDto) {
        return this.authProductsDataSource.register(registerProductsDto);
    }
}
exports.AuthProductsRepositoryImpl = AuthProductsRepositoryImpl;
