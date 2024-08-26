import { RegisterProductsDto } from "../../dto/auth/products/register-productsdto";
import { ProductsEntity } from "../../../data";

export abstract class AuthProductsRepository {
    abstract register(registerProductsDto:RegisterProductsDto): Promise<ProductsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}