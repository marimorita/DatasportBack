import { EstablishmentEntity } from "../../../data";
import { AuthEstablishmentDataSource, AuthEstablishmentRepository, RegisterEstablishmentDto } from "../../../domain";
export class AuthEstablishmentRepositoryImpl implements AuthEstablishmentRepository {

    constructor(
        private readonly authEstablishmentDataSource: AuthEstablishmentDataSource,
    ){}

    register(registerEstablishmentDto: RegisterEstablishmentDto): Promise<EstablishmentEntity> {
        return this.authEstablishmentDataSource.register(registerEstablishmentDto);
    }

    // login(email: string, password: string): Promise<{ token: string, message: string }> {
    //     return this.authEstablishmentDataSource.login(email, password);
    // }

}