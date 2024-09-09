import { Repository } from "typeorm";
import { AppDataSource } from "../../../data/mysql/ormconfig";
import { BcryptAdapter } from "../../../config";
import { AuthEmployeesDataSource, CustomError, RegisterEmployeesDto, LoginEmployeesDto, UpdateAddressEmployeesDto, UpdateEmailEmployeesDto, UpdateLastNameEmployeesDto, UpdateNameEmployeesDto, UpdatePhoneEmployeesDto, UpdateStateEmployeesDto} from "../../../domain";
import { EmployeesMapper } from "../../mappers/employees/employees.mappers";
import { EmployeesEntity } from "../../../data";
import { envs } from '../../../config';
import jwt from 'jsonwebtoken';

export class AuthEmployeesDataSourceImpl implements AuthEmployeesDataSource {
    private readonly employeesRepository: Repository<EmployeesEntity>;

    constructor() {
        this.employeesRepository = AppDataSource.getRepository(EmployeesEntity);
    }
    
    private createEmployeeData(payload: { [key: string]: any }): RegisterEmployeesDto {
        // Puedes crear el DTO aquí sin exponer datos
        const [error, dto] = RegisterEmployeesDto.create(payload);
        if (error) throw CustomError.badRequest(error);
        return dto!;
    }

    async register(payload: { [key: string]: any }): Promise<{ message: string }> {
        const dto = this.createEmployeeData(payload);
        const { id, name, lastName, email, phone, address, password, img, role, idCenter, state } = dto;
        const hashedPassword = BcryptAdapter.hash(password);

        try {
            const existingEmployee = await this.employeesRepository.findOne({ where: { email } });
            if (existingEmployee) throw CustomError.badRequest("Este empleado ya existe");

            const newEmployee = this.employeesRepository.create({
                id,
                name,
                lastName,
                email,
                phone,
                address,
                password: hashedPassword,
                img,
                role,
                idCenter,
                state,
            });

            await this.employeesRepository.save(newEmployee);

            return { message: "Registro exitoso" }; 

        } catch (error) {
            console.error("Error registering employee:", error);
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async login(loginEmployeesDto:LoginEmployeesDto): Promise<{ token: string, role: string | undefined, message: string  }> {
        const { email, password } = loginEmployeesDto
        try {
            const employees = await this.employeesRepository.findOne({ where: { email }});
            if (!employees) throw CustomError.badRequest("Este usuario no existe");

            if (!employees.password) throw CustomError.unauthorized("Contraseña Incorrecta");
            
            const isPasswordValid = BcryptAdapter.compare(password, employees.password);
            if (!isPasswordValid) throw CustomError.unauthorized("Contraseña Incorrecta");

            const token = jwt.sign({ user: {email: employees.email, role: employees.role}}, envs.JWT_SECRET, {expiresIn: '1h',});

            return {
                token,
                role: employees.role,
                message: "Inicio de sesion exitoso"
            };
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async getEmployeeById(id: number): Promise<EmployeesEntity | null> {
        try {
            return await this.employeesRepository.findOne({ where: { id } });
        } catch (error) {
            console.error("Error fetching employee by ID:", error);
            throw CustomError.internalServer();
        }
    }

    async getEmployeeByEmail(email: string): Promise<EmployeesEntity | null> {
        // Implementación para obtener el administrador por su email
        // Ejemplo usando TypeORM:
        const admin = await this.employeesRepository.findOne({ where: { email } });
        return admin || null;
    }

    async UpdateNameEmployeesDto(updateNameEmployeesDto: UpdateNameEmployeesDto): Promise<EmployeesEntity | null> {
        const { id, name } = updateNameEmployeesDto;

        try {
            const employee = await this.employeesRepository.findOneBy({ id });
            if (!employee) {
                return null;
            }

            await this.employeesRepository.update({id}, { name });
            return employee;
        } catch (error) {
            console.error('Error updating employee name:', error);
            throw new Error('Error updating employee name');
        }
    }

    async UpdateLastNameEmployeesDto(updateLastNameEmployeesDto: UpdateLastNameEmployeesDto): Promise<EmployeesEntity | null> {
        const { id, lastName } = updateLastNameEmployeesDto;

        try {
            const employee = await this.employeesRepository.findOneBy({ id });
            if (!employee) {
                return null;
            }

            await this.employeesRepository.update({id}, { lastName });
            return employee;
        } catch (error) {
            console.error('Error updating employee phone:', error);
            throw new Error('Error updating employee phone');
        }
    }

    async UpdateEmailEmployeesDto(updateEmailEmployeesDto: UpdateEmailEmployeesDto): Promise<EmployeesEntity | null> {
        const { id, email } = updateEmailEmployeesDto;

        try {
            const employee = await this.employeesRepository.findOneBy({ id });
            if (!employee) {
                return null;
            }

            await this.employeesRepository.update({id}, { email });
            return employee;
        } catch (error) {
            console.error('Error updating employee email:', error);
            throw new Error('Error updating employee email');
        }
    }

    async UpdatePhoneEmployeesDto(updatePhoneEmployeesDto: UpdatePhoneEmployeesDto): Promise<EmployeesEntity | null> {
        const { id, phone } = updatePhoneEmployeesDto;

        try {
            const employee = await this.employeesRepository.findOneBy({ id });
            if (!employee) {
                return null;
            }

            await this.employeesRepository.update({id}, { phone });
            return employee;
        } catch (error) {
            console.error('Error updating employee phone:', error);
            throw new Error('Error updating employee phone');
        }
    }

    async UpdateAddressEmployeesDto(updateAddressEmployeesDto: UpdateAddressEmployeesDto): Promise<EmployeesEntity | null> {
        const { id, address } = updateAddressEmployeesDto;

        try {
            const employee = await this.employeesRepository.findOneBy({ id });
            if (!employee) {
                return null;
            }

            await this.employeesRepository.update({id}, { address });
            return employee;
        } catch (error) {
            console.error('Error updating employee address:', error);
            throw new Error('Error updating employee address');
        }
    }

    async UpdateStateEmployeesDto(updateStateEmployeesDto: UpdateStateEmployeesDto): Promise<EmployeesEntity | null> {
        const { id, state } = updateStateEmployeesDto;

        try {
            const employee = await this.employeesRepository.findOneBy({ id });
            if (!employee) {
                return null;
            }

            await this.employeesRepository.update({id}, { state });
            return employee;
        } catch (error) {
            console.error('Error updating employee state:', error);
            throw new Error('Error updating employee state');
        }
    }
    async updateEmployeeImg(id: number, img: string): Promise<EmployeesEntity | null> {
        try {
            const employee = await this.employeesRepository.findOneBy({ id });
            if (!employee) {
                return null;
            }
    
            await this.employeesRepository.update(id, { img });
            return employee;
        } catch (error) {
            console.error('Error updating employee img:', error);
            throw new Error('Error updating employee img');
        }
    }

}