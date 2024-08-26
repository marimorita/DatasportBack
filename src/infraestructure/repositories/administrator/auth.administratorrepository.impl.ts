import { AdministratorEntity } from "../../../data";
import { AuthAdministratorDataSource, AuthAdministratorRepository, RegisterAdministratorDto, LoginAdministratorDto } from "../../../domain";
export class AuthAdministratorRepositoryImpl implements AuthAdministratorRepository {

    constructor(
        private readonly authAdministratorDataSource: AuthAdministratorDataSource,
    ){}

    register(registerAdministratorDto: RegisterAdministratorDto): Promise<{ message: string }> {
        return this.authAdministratorDataSource.register(registerAdministratorDto);
    }

    login(loginAdministratorDto: LoginAdministratorDto): Promise<{ token: string, role: string | undefined, message: string }> {
        return this.authAdministratorDataSource.login(loginAdministratorDto);
    }

    getAdministratorByEmail(email: string): Promise<AdministratorEntity | null> {
        return this.authAdministratorDataSource.getAdministratorByEmail(email); // Implementa esta lógica en el DataSource
    }

    updateAdministratorImg(id: number, img: string): Promise<AdministratorEntity | null> {
        return this.authAdministratorDataSource.updateAdministratorImg(id, img);
    }
}