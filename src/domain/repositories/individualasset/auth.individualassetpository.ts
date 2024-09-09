import { IndividualAssetsEntity } from "../../../data";
import { RegisterIndividualAssetsDto, UpdateDescriptionIndividualAssetsDto, UpdateImgIndividualAssetsDto, UpdateNameIndividualAssetsDto } from "../../dto/auth/individualasset/register-individualassetdto";

export abstract class AuthIndividualAssetsRepository {
    abstract register(registerIndividualAssetsDto:RegisterIndividualAssetsDto): Promise<IndividualAssetsEntity>
    abstract getAllIndividualAssetsById(idAssets: number): Promise<IndividualAssetsEntity[]>;
    abstract updateIndividualAssetsName(updateNameIndividualAssetsDto:UpdateNameIndividualAssetsDto): Promise<IndividualAssetsEntity | null>
    abstract updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto:UpdateDescriptionIndividualAssetsDto): Promise<IndividualAssetsEntity | null>
    abstract updateIndividualAssetsImg(updateImgIndividualAssetsDto:UpdateImgIndividualAssetsDto): Promise<IndividualAssetsEntity | null>
}