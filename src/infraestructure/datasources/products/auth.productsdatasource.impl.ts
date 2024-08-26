import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { AuthProductsDataSource, CustomError, RegisterProductsDto} from "../../../domain";
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
            // console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

}