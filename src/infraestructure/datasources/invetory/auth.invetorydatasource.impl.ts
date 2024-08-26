import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { AuthInvetoryDataSource, CustomError, RegisterInvetoryDto} from "../../../domain";
import { InvetoryMapper } from "../../mappers/invetory/invetory.mappers";
import { InvetoryEntity } from "../../../data";
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";

export class AuthInvetoryDataSourceImpl implements AuthInvetoryDataSource {
    private readonly invetoryRepository: Repository<InvetoryEntity>;

    constructor() {
        this.invetoryRepository = AppDataSource.getRepository(InvetoryEntity);
    }
    
    async register(registerInvetoryDto: RegisterInvetoryDto): Promise<InvetoryEntity> {
        const { name, quantity, state, idCenter } = registerInvetoryDto
        
        try {

            const existingInvetory = await this.invetoryRepository.findOne({ where: { name } });
            if (existingInvetory) throw CustomError.badRequest("User already exists")

            const newInvetory = this.invetoryRepository.create({
                name: name,
                quantity: quantity,
                state: state,
                idCenter: idCenter,
            });
           
            await this.invetoryRepository.save(newInvetory);

            return InvetoryMapper.toDomain(newInvetory);
            
        } catch (error) {
            // console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    // async login(email:string, password: string): Promise<{ token: string, message: string }> {
    //     try {
    //         const client = await this.establishmentRepository.findOne({ where: { email }});
    //         if (!client) throw CustomError.badRequest("Invalid crendetials");

    //         if (!client.password) throw CustomError.unauthorized("Invalid credentials");
            
    //         const isPasswordValid = BcryptAdapter.compare(password, client.password);
    //         if (!isPasswordValid) throw CustomError.unauthorized("Invalid crendetials");

    //         const token = jwt.sign({ id: client.id, email: client.email}, envs.JWT_SECRET,{
    //             expiresIn: '1h',
    //         });

    //         return {
    //             token,
    //             message: "Login successful"
    //         };
    //     } catch (error) {
    //         if (error instanceof CustomError) {
    //             throw error;
    //         }
    //         throw CustomError.internalServer();
    //     }
    // }

}