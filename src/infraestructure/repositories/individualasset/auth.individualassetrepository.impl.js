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
    getAllIndividualAssetsById(idAssets) {
        return this.authIndividualAssetsDataSource.getAllIndividualAssetsById(idAssets);
    }
    updateIndividualAssetsName(updateNameIndividualAssetsDto) {
        return this.authIndividualAssetsDataSource.updateIndividualAssetsName(updateNameIndividualAssetsDto);
    }
    updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto) {
        return this.authIndividualAssetsDataSource.updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto);
    }
    updateIndividualAssetsImg(updateImgIndividualAssetsDto) {
        return this.authIndividualAssetsDataSource.updateIndividualAssetsImg(updateImgIndividualAssetsDto);
    }
}
exports.AuthIndividualAssetsRepositoryImpl = AuthIndividualAssetsRepositoryImpl;
