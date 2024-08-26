import { AssetsEntity } from "../../../data";
import { RegisterAssetsDto } from "../../dto/auth/assets/register-assetsdto";

export abstract class AuthAssetsRepository {
    abstract register(registerAssetsDto:RegisterAssetsDto): Promise<AssetsEntity>
}