import { IndividualAssetsEntity } from "../../../data";
import { AuthIndividualAssetsDataSource, AuthIndividualAssetsRepository, RegisterIndividualAssetsDto } from "../../../domain";
export class AuthIndividualAssetsRepositoryImpl implements AuthIndividualAssetsRepository {

    constructor(
        private readonly authIndividualAssetsDataSource: AuthIndividualAssetsDataSource,
    ){}

    register(registerIndividualAssetsDto: RegisterIndividualAssetsDto): Promise<IndividualAssetsEntity> {
        return this.authIndividualAssetsDataSource.register(registerIndividualAssetsDto);
    }

    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authEstablishmentDataSource.login(email, password);
    // }
    getAllIndividualAssetsById(idAssets: number): Promise<IndividualAssetsEntity[]> {
        return this.authIndividualAssetsDataSource.getAllIndividualAssetsById(idAssets);
    }
}