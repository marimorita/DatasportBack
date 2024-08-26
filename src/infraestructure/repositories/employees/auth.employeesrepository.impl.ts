import { EmployeesEntity } from "../../../data";
import { AuthEmployeesDataSource, AuthEmployeesRepository, RegisterEmployeesDto, LoginEmployeesDto } from "../../../domain";
export class AuthEmployeesRepositoryImpl implements AuthEmployeesRepository {

    constructor(
        private readonly authEmployeesDataSource: AuthEmployeesDataSource,
    ){}

    register(registerEmployeesDto: RegisterEmployeesDto): Promise<{ message: string }> {
        return this.authEmployeesDataSource.register(registerEmployeesDto);
    }

    login(loginEmployeesDto:LoginEmployeesDto): Promise<{ token: string, role: string | undefined, message: string }> {
        return this.authEmployeesDataSource.login(loginEmployeesDto);
    }

    getEmployeeById(id: number): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.getEmployeeById(id);
    }

    getEmployeeByEmail(email: string): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.getEmployeeByEmail(email); // Implementa esta lógica en el DataSource
    }

    updateEmployeeImg(id: number, img: string): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.updateEmployeeImg(id, img);
    }

}