import { AdministratorEntity } from "../../../data";
import { RegisterAdministratorDto, LoginAdministratorDto } from "../../dto/auth/administrator/register-administrator.dto";

export abstract class AuthAdministratorDataSource {
    abstract register(registerAdministratorDto:RegisterAdministratorDto): Promise<{ message: string }>
    abstract login(loginAdministratorDto:LoginAdministratorDto): Promise<{ token: string, role: string | undefined, message: string }>;
    abstract getAdministratorByEmail(email: string): Promise<AdministratorEntity | null>;
    abstract updateAdministratorImg(id: number, img: string): Promise<AdministratorEntity | null>
}