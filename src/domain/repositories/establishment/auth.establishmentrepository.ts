import { RegisterEstablishmentDto } from "../../dto/auth/establishment/register-establishmentdto";
import { EstablishmentEntity } from "../../../data";

export abstract class AuthEstablishmentRepository {
    abstract register(registerEstablishmentDto:RegisterEstablishmentDto): Promise<EstablishmentEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}