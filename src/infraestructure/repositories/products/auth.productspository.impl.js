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
    getAllProducts() {
        return this.authProductsDataSource.getAllProducts();
    }
    getProductsById(id) {
        return this.authProductsDataSource.getProductsById(id);
    }
    UpdateNameProductsDto(updateNameProductsDto) {
        return this.authProductsDataSource.UpdateNameProductsDto(updateNameProductsDto);
    }
    UpdateDescriptionProductsDto(updateDescriptionProductsDto) {
        return this.authProductsDataSource.UpdateDescriptionProductsDto(updateDescriptionProductsDto);
    }
    UpdateStateProductsDto(updateStateProductsDto) {
        return this.authProductsDataSource.UpdateStateProductsDto(updateStateProductsDto);
    }
    UpdateStockProductsDto(updateStockProductsDto) {
        return this.authProductsDataSource.UpdateStockProductsDto(updateStockProductsDto);
    }
    UpdateImgProductsDto(updateImgProductsDto) {
        return this.authProductsDataSource.UpdateImgProductsDto(updateImgProductsDto);
    }
    UpdatePriceProductsDto(updatePriceProductsDto) {
        return this.authProductsDataSource.UpdatePriceProductsDto(updatePriceProductsDto);
    }
}
exports.AuthProductsRepositoryImpl = AuthProductsRepositoryImpl;
