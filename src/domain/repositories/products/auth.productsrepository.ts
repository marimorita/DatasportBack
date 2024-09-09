import { RegisterProductsDto, UpdateNameProductsDto, UpdateDescriptionProductsDto, UpdateStateProductsDto, UpdateStockProductsDto, UpdateImgProductsDto, UpdatePriceProductsDto } from "../../dto/auth/products/register-productsdto";
import { ProductsEntity } from "../../../data";

export abstract class AuthProductsRepository {
    abstract register(registerProductsDto:RegisterProductsDto): Promise<ProductsEntity>

    abstract getAllProducts(): Promise<ProductsEntity[]>;

    abstract getProductsById(id: number): Promise<ProductsEntity | null>;
    abstract UpdateNameProductsDto(updateNameProductsDto:UpdateNameProductsDto): Promise<ProductsEntity | null>
    abstract UpdateDescriptionProductsDto(updateDescriptionProductsDto:UpdateDescriptionProductsDto): Promise<ProductsEntity | null>
    abstract UpdateStateProductsDto(updateStateProductsDto:UpdateStateProductsDto): Promise<ProductsEntity | null>
    abstract UpdateStockProductsDto(updateStockProductsDto:UpdateStockProductsDto): Promise<ProductsEntity | null>
    abstract UpdateImgProductsDto(updateImgProductsDto:UpdateImgProductsDto): Promise<ProductsEntity | null>
    abstract UpdatePriceProductsDto(updatePriceProductsDto:UpdatePriceProductsDto): Promise<ProductsEntity | null>
}