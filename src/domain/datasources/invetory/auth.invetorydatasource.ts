import { InvetoryEntity } from "../../../data";
import { RegisterInvetoryDto } from "../../dto/auth/inventory/register-inventorydto";

export abstract class AuthInvetoryDataSource {
    abstract register(registerInvetoryDto:RegisterInvetoryDto): Promise<InvetoryEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}