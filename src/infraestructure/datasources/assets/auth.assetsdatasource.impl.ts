import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { AuthAssetsDataSource, CustomError, RegisterAssetsDto, UpdateStockAssetsDto, UpdateNameAssetsDto, UpdateDescriptionAssetsDto, UpdateImgAssetsDto} from "../../../domain";
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

    async updateAssetsStock(updateStockAssetsDto: UpdateStockAssetsDto): Promise<AssetsEntity | null> {
        const { id, stock } = updateStockAssetsDto;

        try {
            const admin = await this.assetsRepository.findOneBy({ id });
            if (!admin) {
                return null;
            }

            await this.assetsRepository.update({id}, { stock });
            return admin;
        } catch (error) {
            console.error('Error updating assets stock:', error);
            throw new Error('Error updating assets stock');
        }
    }

    async updateAssetsName(updateNameAssetsDto: UpdateNameAssetsDto): Promise<AssetsEntity | null> {
        const { id, name } = updateNameAssetsDto;

        try {
            const assets = await this.assetsRepository.findOneBy({ id });
            if (!assets) {
                return null;
            }

            await this.assetsRepository.update({id}, { name });
            return assets;
        } catch (error) {
            console.error('Error updating assets stock:', error);
            throw new Error('Error updating assets stock');
        }
    }

    async updateAssetsDescription(updateDescriptionAssetsDto: UpdateDescriptionAssetsDto): Promise<AssetsEntity | null> {
        const { id, description } = updateDescriptionAssetsDto;

        try {
            const assets = await this.assetsRepository.findOneBy({ id });
            if (!assets) {
                return null;
            }

            await this.assetsRepository.update({id}, { description });
            return assets;
        } catch (error) {
            console.error('Error updating assets stock:', error);
            throw new Error('Error updating assets stock');
        }
    }

    async updateAssetsImg(updateImgAssetsDto: UpdateImgAssetsDto): Promise<AssetsEntity | null> {
        const { id, img } = updateImgAssetsDto;

        try {
            const assets = await this.assetsRepository.findOneBy({ id });
            if (!assets) {
                return null;
            }

            await this.assetsRepository.update({id}, { img });
            return assets;
        } catch (error) {
            console.error('Error updating assets stock:', error);
            throw new Error('Error updating assets stock');
        }
    }


}

