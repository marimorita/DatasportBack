import { AssetsEntity } from "../../../data";
import { RegisterAssetsDto } from "../../dto/auth/assets/register-assetsdto";

export abstract class AuthAssetsDataSource {
    abstract register(registerAssetsDto:RegisterAssetsDto): Promise<AssetsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
    abstract getAssetsById(id: number): Promise<AssetsEntity | null>;
}