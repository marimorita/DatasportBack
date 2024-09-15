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
    getAllAssets() {
        return this.authAssetsDataSource.getAllAssets();
    }
    getAssetsById(id) {
        return this.authAssetsDataSource.getAssetsById(id);
    }
    updateAssetsStock(updateStockAssetsDto) {
        return this.authAssetsDataSource.updateAssetsStock(updateStockAssetsDto);
    }
    updateAssetsName(updateNameAssetsDto) {
        return this.authAssetsDataSource.updateAssetsName(updateNameAssetsDto);
    }
    updateAssetsDescription(updateDescriptionAssetsDto) {
        return this.authAssetsDataSource.updateAssetsDescription(updateDescriptionAssetsDto);
    }
    updateAssetsImg(updateImgAssetsDto) {
        return this.authAssetsDataSource.updateAssetsImg(updateImgAssetsDto);
    }
}
exports.AuthAssetsRepositoryImpl = AuthAssetsRepositoryImpl;
