import { ProductsEntity } from "../../../data";
import { AuthProductsDataSource, AuthProductsRepository, RegisterProductsDto, UpdateDescriptionProductsDto, UpdateImgProductsDto, UpdateNameProductsDto, UpdatePriceProductsDto, UpdateStateProductsDto, UpdateStockProductsDto } from "../../../domain";
export class AuthProductsRepositoryImpl implements AuthProductsRepository {

    constructor(
        private readonly authProductsDataSource: AuthProductsDataSource,
    ){}

    register(registerProductsDto: RegisterProductsDto): Promise<ProductsEntity> {
        return this.authProductsDataSource.register(registerProductsDto);
    }

    getAllProducts(): Promise<ProductsEntity[]> {
        return this.authProductsDataSource.getAllProducts();
    }

    getProductsById(id: number): Promise<ProductsEntity | null> {
        return this.authProductsDataSource.getProductsById(id);
    }

    UpdateNameProductsDto(updateNameProductsDto:UpdateNameProductsDto): Promise<ProductsEntity | null> {
        return this.authProductsDataSource.UpdateNameProductsDto(updateNameProductsDto);
    }

    UpdateDescriptionProductsDto(updateDescriptionProductsDto:UpdateDescriptionProductsDto): Promise<ProductsEntity | null> {
        return this.authProductsDataSource.UpdateDescriptionProductsDto(updateDescriptionProductsDto);
    }

    UpdateStateProductsDto(updateStateProductsDto:UpdateStateProductsDto): Promise<ProductsEntity | null> {
        return this.authProductsDataSource.UpdateStateProductsDto(updateStateProductsDto);
    }

    UpdateStockProductsDto(updateStockProductsDto:UpdateStockProductsDto): Promise<ProductsEntity | null> {
        return this.authProductsDataSource.UpdateStockProductsDto(updateStockProductsDto);
    }

    UpdateImgProductsDto(updateImgProductsDto:UpdateImgProductsDto): Promise<ProductsEntity | null> {
        return this.authProductsDataSource.UpdateImgProductsDto(updateImgProductsDto);
    }

    UpdatePriceProductsDto(updatePriceProductsDto:UpdatePriceProductsDto): Promise<ProductsEntity | null> {
        return this.authProductsDataSource.UpdatePriceProductsDto(updatePriceProductsDto);
    }
}