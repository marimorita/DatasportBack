import { IndividualAssetsEntity } from "../../../data";
import { RegisterIndividualAssetsDto } from "../../dto/auth/individualasset/register-individualassetdto";

export abstract class AuthIndividualAssetsRepository {
    abstract register(registerIndividualAssetsDto:RegisterIndividualAssetsDto): Promise<IndividualAssetsEntity>
    abstract getAllIndividualAssetsById(id: number): Promise<IndividualAssetsEntity[]>;

}