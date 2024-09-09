import { AssetsEntity } from "../../../data";
import { AuthAssetsDataSource, AuthAssetsRepository, RegisterAssetsDto, UpdateStockAssetsDto, UpdateNameAssetsDto, UpdateDescriptionAssetsDto, UpdateImgAssetsDto } from "../../../domain";
export class AuthAssetsRepositoryImpl implements AuthAssetsRepository {

    constructor(
        private readonly authAssetsDataSource: AuthAssetsDataSource,
    ){}

    register(registerAssetsDto: RegisterAssetsDto): Promise<AssetsEntity> {
        return this.authAssetsDataSource.register(registerAssetsDto);
    }

    getAllAssets(): Promise<AssetsEntity[]> {
        return this.authAssetsDataSource.getAllAssets();
    }

    getAssetsById(id: number): Promise<AssetsEntity | null> {
        return this.authAssetsDataSource.getAssetsById(id);
    }

    updateAssetsStock(updateStockAssetsDto:UpdateStockAssetsDto): Promise<AssetsEntity | null> {
        return this.authAssetsDataSource.updateAssetsStock(updateStockAssetsDto);
    }

    updateAssetsName(updateNameAssetsDto:UpdateNameAssetsDto): Promise<AssetsEntity | null> {
        return this.authAssetsDataSource.updateAssetsName(updateNameAssetsDto);
    }

    updateAssetsDescription(updateDescriptionAssetsDto:UpdateDescriptionAssetsDto): Promise<AssetsEntity | null> {
        return this.authAssetsDataSource.updateAssetsDescription(updateDescriptionAssetsDto);
    }

    updateAssetsImg(updateImgAssetsDto:UpdateImgAssetsDto): Promise<AssetsEntity | null> {
        return this.authAssetsDataSource.updateAssetsImg(updateImgAssetsDto);
    }

}