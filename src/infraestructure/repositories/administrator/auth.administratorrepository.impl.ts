import { AdministratorEntity } from "../../../data";
import { AuthAdministratorDataSource, AuthAdministratorRepository, RegisterAdministratorDto, LoginAdministratorDto, UpdateEmailAdministratorDto, UpdateNameAdministratorDto, UpdatePhoneAdministratorDto } from "../../../domain";
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

    updateAdministratorName(updateNameAdministratorDto:UpdateNameAdministratorDto): Promise<AdministratorEntity | null> {
        return this.authAdministratorDataSource.updateAdministratorName(updateNameAdministratorDto);
    }

    // updateAdministratorId(updateIdAdministratorDto:UpdateIdAdministratorDto): Promise<AdministratorEntity | null> {
    //     return this.authAdministratorDataSource.updateAdministratorId(updateIdAdministratorDto);
    // }

    updateAdministratorPhone(updatePhoneAdministratorDto:UpdatePhoneAdministratorDto): Promise<AdministratorEntity | null> {
        return this.authAdministratorDataSource.updateAdministratorPhone(updatePhoneAdministratorDto);
    }

    updateAdministratorEmail(updateEmailAdministratorDto:UpdateEmailAdministratorDto): Promise<AdministratorEntity | null> {
        return this.authAdministratorDataSource.updateAdministratorEmail(updateEmailAdministratorDto);
    }

    updateAdministratorImg(id: number, img: string): Promise<AdministratorEntity | null> {
        return this.authAdministratorDataSource.updateAdministratorImg(id, img);
    }
}