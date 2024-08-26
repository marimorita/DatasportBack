import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { AuthEstablishmentDataSource, CustomError, RegisterEstablishmentDto} from "../../../domain";
import { EstablishmentMapper } from "../../mappers/establishment/establishment.mappers";
import { EstablishmentEntity } from "../../../data";
// import { envs } from '../../../config';
// import jwt from 'jsonwebtoken';
// import { BcryptAdapter } from "../../../config";

export class AuthEstablishmentDataSourceImpl implements AuthEstablishmentDataSource {
    private readonly establishmentRepository: Repository<EstablishmentEntity>;

    constructor() {
        this.establishmentRepository = AppDataSource.getRepository(EstablishmentEntity);
    }
    
    async register(registerEstablishmentDto: RegisterEstablishmentDto): Promise<EstablishmentEntity> {
        const { name, email, address, phone } = registerEstablishmentDto
        
        try {

            const existingEstablishment = await this.establishmentRepository.findOne({ where: { email } });
            if (existingEstablishment) throw CustomError.badRequest("User already exists")

            const newEstablishment = this.establishmentRepository.create({
                name: name,
                email: email,
                address: address,
                phone: phone,
            });
           
            await this.establishmentRepository.save(newEstablishment);

            return EstablishmentMapper.toDomain(newEstablishment);
            
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