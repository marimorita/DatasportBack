import { IndividualAssetsEntity } from "../../../data";
import { RegisterIndividualAssetsDto } from "../../dto/auth/individualasset/register-individualassetdto";

export abstract class AuthIndividualAssetsDataSource {
    abstract register(registerIndividualAssetsDto:RegisterIndividualAssetsDto): Promise<IndividualAssetsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;

    abstract getAllIndividualAssetsById(idAssets: number): Promise<IndividualAssetsEntity[]>;
}