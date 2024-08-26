import { AssetsEntity } from "../../../data";
import { AuthAssetsDataSource, AuthAssetsRepository, RegisterAssetsDto } from "../../../domain";
export class AuthAssetsRepositoryImpl implements AuthAssetsRepository {

    constructor(
        private readonly authAssetsDataSource: AuthAssetsDataSource,
    ){}

    register(registerAssetsDto: RegisterAssetsDto): Promise<AssetsEntity> {
        return this.authAssetsDataSource.register(registerAssetsDto);
    }

    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authEstablishmentDataSource.login(email, password);
    // }

}