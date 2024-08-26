import { ProductsEntity } from "../../../data";
import { AuthProductsDataSource, AuthProductsRepository, RegisterProductsDto } from "../../../domain";
export class AuthProductsRepositoryImpl implements AuthProductsRepository {

    constructor(
        private readonly authProductsDataSource: AuthProductsDataSource,
    ){}

    register(registerProductsDto: RegisterProductsDto): Promise<ProductsEntity> {
        return this.authProductsDataSource.register(registerProductsDto);
    }

    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authEstablishmentDataSource.login(email, password);
    // }

}