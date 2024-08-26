import { ProductsEntity } from "../../../data";
import { RegisterProductsDto } from "../../dto/auth/products/register-productsdto";

export abstract class AuthProductsDataSource {
    abstract register(registerProductsDto:RegisterProductsDto): Promise<ProductsEntity>
    // abstract login(email: string, password: string): Promise<{ token: string, message: string }>;
}