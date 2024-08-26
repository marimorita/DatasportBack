import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
import { AuthAdministratorDataSource, CustomError, RegisterAdministratorDto, LoginAdministratorDto} from "../../../domain";
import { AdministratorMapper } from "../../mappers/administrator/administrator.mappers";
import { AdministratorEntity } from "../../../data";


import { envs } from '../../../config';
import jwt from 'jsonwebtoken';

export class AuthAdministratorDataSourceImpl implements AuthAdministratorDataSource {
    private readonly administratorRepository: Repository<AdministratorEntity>;

    constructor() {
        this.administratorRepository = AppDataSource.getRepository(AdministratorEntity);
    }
    
    async register(registerAdministratorDto: RegisterAdministratorDto): Promise<{message: string}> {
        const { id, name, lastName, email, phone, address, password, img, role, idCenter} = registerAdministratorDto;

        const hashedPassword = BcryptAdapter.hash(password);
        
        try {

            const existingAdministrator = await this.administratorRepository.findOne({ where: { email } });
            if (existingAdministrator) throw CustomError.badRequest("Este administrador ya existe")

            const newAdministrator = this.administratorRepository.create({
                id: id,
                name: name,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                password: hashedPassword,
                img: img,
                role: role,
                idCenter: idCenter,
            });
           
            await this.administratorRepository.save(newAdministrator);

            return { message: "Registro exitoso" }; 
            
        } catch (error) {
            console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async login(loginAdministratorDto: LoginAdministratorDto): Promise<{ token: string, role: string | undefined, message: string }> {
        const { email, password } = loginAdministratorDto

        try {
            const admin = await this.administratorRepository.findOne({ where: { email }});
            if (!admin) throw CustomError.badRequest("Este usuario no existe");

            if (!admin.password) throw CustomError.unauthorized("Contraseña Incorrecta");
            
            const isPasswordValid = BcryptAdapter.compare(password, admin.password);
            if (!isPasswordValid) throw CustomError.unauthorized("Contraseña Incorrecta");

            const token = jwt.sign({ user: {email: admin.email, role: admin.role}}, envs.JWT_SECRET, {expiresIn: '1h',});

            return {
                token,
                role: admin.role,
                message: "Inicio de sesion exitoso"
            };
        } catch (error) {
            console.error("Error registering client:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async getAdministratorByEmail(email: string): Promise<AdministratorEntity | null> {
        // Implementación para obtener el administrador por su email
        // Ejemplo usando TypeORM:
        const admin = await this.administratorRepository.findOne({ where: { email } });
        return admin || null;
    }

    async updateAdministratorImg(id: number, img: string): Promise<AdministratorEntity | null> {
        try {
            const admin = await this.administratorRepository.findOneBy({ id });
            if (!admin) {
                return null;
            }
    
            await this.administratorRepository.update(id, { img });
            return admin;
        } catch (error) {
            console.error('Error updating admin img:', error);
            throw new Error('Error updating admin img');
        }
    }
}