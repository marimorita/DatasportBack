import { AssetsEntity } from "../../../data";
import { RegisterAssetsDto, UpdateStockAssetsDto, UpdateNameAssetsDto, UpdateDescriptionAssetsDto, UpdateImgAssetsDto } from "../../dto/auth/assets/register-assetsdto";

export abstract class AuthAssetsRepository {
    abstract register(registerAssetsDto:RegisterAssetsDto): Promise<AssetsEntity>
    abstract getAllAssets(): Promise<AssetsEntity[]>;

    abstract getAssetsById(id: number): Promise<AssetsEntity | null>;

    abstract updateAssetsStock(updateStockAssetsDto: UpdateStockAssetsDto): Promise<AssetsEntity | null>
    abstract updateAssetsName(updateNameAssetsDto:UpdateNameAssetsDto): Promise<AssetsEntity | null>
    abstract updateAssetsDescription(updateDescriptionAssetsDto:UpdateDescriptionAssetsDto): Promise<AssetsEntity | null>
    abstract updateAssetsImg(updateImgAssetsDto:UpdateImgAssetsDto): Promise<AssetsEntity | null>
}