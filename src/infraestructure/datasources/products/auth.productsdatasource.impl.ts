import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { AuthProductsDataSource, CustomError, RegisterProductsDto, UpdateNameProductsDto, UpdateDescriptionProductsDto, UpdateStateProductsDto, UpdateStockProductsDto, UpdateImgProductsDto, UpdatePriceProductsDto} from "../../../domain";
import { ProductsMapper } from "../../mappers/products/products.mappers";
import { ProductsEntity } from "../../../data";
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";

export class AuthProductsDataSourceImpl implements AuthProductsDataSource {
    private readonly productsRepository: Repository<ProductsEntity>;

    constructor() {
        this.productsRepository = AppDataSource.getRepository(ProductsEntity);
    }
    
    async register(registerProductsDto: RegisterProductsDto): Promise<ProductsEntity> {
        const { name, description, state, stock, img, price, idCenter} = registerProductsDto
        
        try {

            const existingProducts = await this.productsRepository.findOne({ where: { name } });
            if (existingProducts) throw CustomError.badRequest("Este producto ya existe")

            const newProducts = this.productsRepository.create({
                name: name,
                description: description,
                state: state,
                stock: stock,
                img: img,
                price: price,
                idCenter: idCenter,
            });
           
            await this.productsRepository.save(newProducts);

            return ProductsMapper.toDomain(newProducts);
            
        } catch (error) {
            console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async getAllProducts(): Promise<ProductsEntity[]> {
        try {
            return await this.productsRepository.find();
        } catch (error) {
            throw CustomError.internalServer();
        }
    }

    async getProductsById(id: number): Promise<ProductsEntity | null> {
        try {
            return await this.productsRepository.findOne({ where: { id } });
        } catch (error) {
            console.error("Error fetching client by ID:", error);
            throw CustomError.internalServer();
        }
    }

    async UpdateNameProductsDto(updateNameProductsDto: UpdateNameProductsDto): Promise<ProductsEntity | null> {
        const { id, name } = updateNameProductsDto;

        try {
            const products = await this.productsRepository.findOneBy({ id });
            if (!products) {
                return null;
            }

            await this.productsRepository.update({id}, { name });
            return products;
        } catch (error) {
            console.error('Error updating products stock:', error);
            throw new Error('Error updating products stock');
        }
    }

    async UpdateDescriptionProductsDto(updateDescriptionProductsDto: UpdateDescriptionProductsDto): Promise<ProductsEntity | null> {
        const { id, description } = updateDescriptionProductsDto;

        try {
            const products = await this.productsRepository.findOneBy({ id });
            if (!products) {
                return null;
            }

            await this.productsRepository.update({id}, { description });
            return products;
        } catch (error) {
            console.error('Error updating products stock:', error);
            throw new Error('Error updating products stock');
        }
    }

    async UpdateStateProductsDto(updateStateProductsDto: UpdateStateProductsDto): Promise<ProductsEntity | null> {
        const { id, state } = updateStateProductsDto;

        try {
            const products = await this.productsRepository.findOneBy({ id });
            if (!products) {
                return null;
            }

            await this.productsRepository.update({id}, { state });
            return products;
        } catch (error) {
            console.error('Error updating products stock:', error);
            throw new Error('Error updating products stock');
        }
    }

    async UpdateStockProductsDto(updateStockProductsDto: UpdateStockProductsDto): Promise<ProductsEntity | null> {
        const { id, stock } = updateStockProductsDto;

        try {
            const products = await this.productsRepository.findOneBy({ id });
            if (!products) {
                return null;
            }

            await this.productsRepository.update({id}, { stock });
            return products;
        } catch (error) {
            console.error('Error updating products stock:', error);
            throw new Error('Error updating products stock');
        }
    }

    async UpdateImgProductsDto(updateImgProductsDto: UpdateImgProductsDto): Promise<ProductsEntity | null> {
        const { id, img } = updateImgProductsDto;

        try {
            const products = await this.productsRepository.findOneBy({ id });
            if (!products) {
                return null;
            }

            await this.productsRepository.update({id}, { img });
            return products;
        } catch (error) {
            console.error('Error updating products stock:', error);
            throw new Error('Error updating products stock');
        }
    }

    async UpdatePriceProductsDto(updatePriceProductsDto: UpdatePriceProductsDto): Promise<ProductsEntity | null> {
        const { id, price } = updatePriceProductsDto;

        try {
            const products = await this.productsRepository.findOneBy({ id });
            if (!products) {
                return null;
            }

            await this.productsRepository.update({id}, { price });
            return products;
        } catch (error) {
            console.error('Error updating products stock:', error);
            throw new Error('Error updating products stock');
        }
    }
}