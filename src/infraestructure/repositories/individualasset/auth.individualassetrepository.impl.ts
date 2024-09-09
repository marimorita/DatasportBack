import { IndividualAssetsEntity } from "../../../data";
import { AuthIndividualAssetsDataSource, AuthIndividualAssetsRepository, RegisterIndividualAssetsDto, UpdateDescriptionIndividualAssetsDto, UpdateImgIndividualAssetsDto, UpdateNameIndividualAssetsDto } from "../../../domain";
export class AuthIndividualAssetsRepositoryImpl implements AuthIndividualAssetsRepository {

    constructor(
        private readonly authIndividualAssetsDataSource: AuthIndividualAssetsDataSource,
    ){}

    register(registerIndividualAssetsDto: RegisterIndividualAssetsDto): Promise<IndividualAssetsEntity> {
        return this.authIndividualAssetsDataSource.register(registerIndividualAssetsDto);
    }

    getAllIndividualAssetsById(idAssets: number): Promise<IndividualAssetsEntity[]> {
        return this.authIndividualAssetsDataSource.getAllIndividualAssetsById(idAssets);
    }
    updateIndividualAssetsName(updateNameIndividualAssetsDto:UpdateNameIndividualAssetsDto): Promise<IndividualAssetsEntity | null> {
        return this.authIndividualAssetsDataSource.updateIndividualAssetsName(updateNameIndividualAssetsDto);
    }

    updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto:UpdateDescriptionIndividualAssetsDto): Promise<IndividualAssetsEntity | null> {
        return this.authIndividualAssetsDataSource.updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto);
    }

    updateIndividualAssetsImg(updateImgIndividualAssetsDto:UpdateImgIndividualAssetsDto): Promise<IndividualAssetsEntity | null> {
        return this.authIndividualAssetsDataSource.updateIndividualAssetsImg(updateImgIndividualAssetsDto);
    }
}