import { RegisterInvetoryDto } from "../../dto/auth/inventory/register-inventorydto";
import { InvetoryEntity } from "../../../data";

export abstract class AuthInvetoryRepository {
    abstract register(registerInvetoryDto:RegisterInvetoryDto): Promise<InvetoryEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}