import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { AuthIndividualAssetsDataSource, CustomError, RegisterIndividualAssetsDto, UpdateDescriptionIndividualAssetsDto, UpdateImgIndividualAssetsDto, UpdateNameIndividualAssetsDto} from "../../../domain";
import { IndividualAssetsMapper } from "../../mappers/individualasset/individualasset.mappers";
import { IndividualAssetsEntity } from "../../../data";
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";

export class AuthIndividualAssetsDataSourceImpl implements AuthIndividualAssetsDataSource {
    private readonly individualAssetsRepository: Repository<IndividualAssetsEntity>;

    constructor() {
        this.individualAssetsRepository = AppDataSource.getRepository(IndividualAssetsEntity);
    }
    
    async register(registerIndividualAssetsDto: RegisterIndividualAssetsDto): Promise<IndividualAssetsEntity> {
        const { name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets } = registerIndividualAssetsDto
        
        try {

            const newAssets = this.individualAssetsRepository.create({  
                name: name,
                description: description,
                adquisitionDate: adquisitionDate,
                state: state,
                condition: condition,
                img: img,
                lastMaintenance: lastMaintenance,
                nextMaintenance: nextMaintenance,
                idAssets: idAssets,
            });
           
            await this.individualAssetsRepository.save(newAssets);

            return IndividualAssetsMapper.toDomain(newAssets);
            
        } catch (error) {
            console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async getAllIndividualAssetsById(idAssets: number): Promise<IndividualAssetsEntity[]> {

        try {
            return await this.individualAssetsRepository.find({ where: { idAssets } });
        } catch (error) {
            throw CustomError.internalServer();
        }
    }

    async updateIndividualAssetsName(updateNameIndividualAssetsDto: UpdateNameIndividualAssetsDto): Promise<IndividualAssetsEntity | null> {
        const { id, name } = updateNameIndividualAssetsDto;

        try {
            const assets = await this.individualAssetsRepository.findOneBy({ id });
            if (!assets) {
                return null;
            }

            await this.individualAssetsRepository.update({id}, { name });
            return assets;
        } catch (error) {
            console.error('Error updating assets stock:', error);
            throw new Error('Error updating assets stock');
        }
    }

    async updateIndividualAssetsDescription(updateDescriptionIndividualAssetsDto: UpdateDescriptionIndividualAssetsDto): Promise<IndividualAssetsEntity | null> {
        const { id, description } = updateDescriptionIndividualAssetsDto;

        try {
            const assets = await this.individualAssetsRepository.findOneBy({ id });
            if (!assets) {
                return null;
            }

            await this.individualAssetsRepository.update({id}, { description });
            return assets;
        } catch (error) {
            console.error('Error updating assets stock:', error);
            throw new Error('Error updating assets stock');
        }
    }

    async updateIndividualAssetsImg(updateImgIndividualAssetsDto: UpdateImgIndividualAssetsDto): Promise<IndividualAssetsEntity | null> {
        const { id, img } = updateImgIndividualAssetsDto;

        try {
            const assets = await this.individualAssetsRepository.findOneBy({ id });
            if (!assets) {
                return null;
            }

            await this.individualAssetsRepository.update({id}, { img });
            return assets;
        } catch (error) {
            console.error('Error updating assets stock:', error);
            throw new Error('Error updating assets stock');
        }
    }
}