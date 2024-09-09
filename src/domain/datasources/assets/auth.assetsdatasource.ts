import { AssetsEntity } from "../../../data";
import { RegisterAssetsDto, UpdateStockAssetsDto, UpdateNameAssetsDto, UpdateDescriptionAssetsDto, UpdateImgAssetsDto  } from "../../dto/auth/assets/register-assetsdto";

export abstract class AuthAssetsDataSource {
    abstract register(registerAssetsDto: RegisterAssetsDto): Promise<AssetsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
    abstract getAllAssets(): Promise<AssetsEntity[]>;

    abstract getAssetsById(id: number): Promise<AssetsEntity | null>;

    abstract updateAssetsStock(updateStockAssetsDto: UpdateStockAssetsDto): Promise<AssetsEntity | null>
    abstract updateAssetsName(updateNameAssetsDto:UpdateNameAssetsDto): Promise<AssetsEntity | null>
    abstract updateAssetsDescription(updateDescriptionAssetsDto:UpdateDescriptionAssetsDto): Promise<AssetsEntity | null>
    abstract updateAssetsImg(updateImgAssetsDto:UpdateImgAssetsDto): Promise<AssetsEntity | null>

}