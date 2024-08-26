import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { AuthAssetsDataSource, CustomError, RegisterAssetsDto} from "../../../domain";
import { AssetsMapper } from "../../mappers/assets/assets.mappers";
import { AssetsEntity } from "../../../data";
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";

export class AuthAssetsDataSourceImpl implements AuthAssetsDataSource {
    private readonly assetsRepository: Repository<AssetsEntity>;

    constructor() {
        this.assetsRepository = AppDataSource.getRepository(AssetsEntity);
    }
    
    async register(registerAssetsDto: RegisterAssetsDto): Promise<AssetsEntity> {
        const { id, name, description, stock, price, img, condition, lastMaintenance, nextMaintenance} = registerAssetsDto
        
        try {

            const existingAssets = await this.assetsRepository.findOne({ where: { id } });
            if (existingAssets) throw CustomError.badRequest("Este bien ya existe")

            const newAssets = this.assetsRepository.create({
                id: id,
                name: name,
                description: description,
                stock: stock,
                price: price,
                img: img,
                condition: condition,
                lastMaintenance: lastMaintenance,
                nextMaintenance: nextMaintenance,
            });
           
            await this.assetsRepository.save(newAssets);

            return AssetsMapper.toDomain(newAssets);
            
        } catch (error) {
            // console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

}