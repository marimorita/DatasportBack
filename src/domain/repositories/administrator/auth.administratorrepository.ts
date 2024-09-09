import { RegisterAdministratorDto, LoginAdministratorDto, UpdateEmailAdministratorDto, UpdateNameAdministratorDto, UpdatePhoneAdministratorDto } from "../../dto/auth/administrator/register-administrator.dto";
import { AdministratorEntity } from "../../../data";

export abstract class AuthAdministratorRepository {
    abstract register(registerAdministratorDto:RegisterAdministratorDto): Promise<{ message: string }>
    abstract login(loginAdministratorDto:LoginAdministratorDto): Promise<{ token: string, role: string | undefined, message: string }>;
    abstract getAdministratorByEmail(email: string): Promise<AdministratorEntity | null>;
    abstract updateAdministratorName(updateNameAdministratorDto: UpdateNameAdministratorDto): Promise<AdministratorEntity | null>
    // abstract updateAdministratorId(updateIdAdministratorDto: UpdateIdAdministratorDto): Promise<AdministratorEntity | null>
    abstract updateAdministratorPhone(updatePhoneAdministratorDto: UpdatePhoneAdministratorDto): Promise<AdministratorEntity | null>
    abstract updateAdministratorEmail(updateEmailAdministratorDto: UpdateEmailAdministratorDto): Promise<AdministratorEntity | null>
    abstract updateAdministratorImg(id: number, img: string): Promise<AdministratorEntity | null>
    

}