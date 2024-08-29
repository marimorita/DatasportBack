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
        const { id, name, description, img, stock} = registerAssetsDto
        
        try {

            const existingAssets = await this.assetsRepository.findOne({ where: { id } });
            if (existingAssets) throw CustomError.badRequest("Este bien ya existe")

            const newAssets = this.assetsRepository.create({
                id: id,
                name: name,
                description: description,
                img: img,
                stock: stock,
            });
           
            await this.assetsRepository.save(newAssets);

            return AssetsMapper.toDomain(newAssets);
            
        } catch (error) {
            console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async getAllAssets(): Promise<AssetsEntity[]> {
        try {
            return await this.assetsRepository.find();
        } catch (error) {
            throw CustomError.internalServer();
        }
    }

    async getAssetsById(id: number): Promise<AssetsEntity | null> {
        try {
            return await this.assetsRepository.findOne({ where: { id } });
        } catch (error) {
            console.error("Error fetching client by ID:", error);
            throw CustomError.internalServer();
        }
    }

}

