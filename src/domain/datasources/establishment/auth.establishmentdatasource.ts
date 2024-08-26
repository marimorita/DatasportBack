import { EstablishmentEntity } from "../../../data";
import { RegisterEstablishmentDto } from "../../dto/auth/establishment/register-establishmentdto";

export abstract class AuthEstablishmentDataSource {
    abstract register(registerEstablishmentDto:RegisterEstablishmentDto): Promise<EstablishmentEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}