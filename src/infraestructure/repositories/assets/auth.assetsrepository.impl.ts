import { AssetsEntity } from "../../../data";
import { AuthAssetsDataSource, AuthAssetsRepository, RegisterAssetsDto } from "../../../domain";
export class AuthAssetsRepositoryImpl implements AuthAssetsRepository {

    constructor(
        private readonly authAssetsDataSource: AuthAssetsDataSource,
    ){}

    register(registerAssetsDto: RegisterAssetsDto): Promise<AssetsEntity> {
        return this.authAssetsDataSource.register(registerAssetsDto);
    }

    getAllAssets(): Promise<AssetsEntity[]> {
        return this.authAssetsDataSource.getAllAssets();
    }

    getAssetsById(id: number): Promise<AssetsEntity | null> {
        return this.authAssetsDataSource.getAssetsById(id);
    }

    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authEstablishmentDataSource.login(email, password);
    // }

}