import { EmployeesEntity } from "../../../data";
import { AuthEmployeesDataSource, AuthEmployeesRepository, RegisterEmployeesDto, LoginEmployeesDto, UpdateAddressEmployeesDto, UpdateEmailEmployeesDto, UpdateLastNameEmployeesDto, UpdateNameEmployeesDto, UpdatePhoneEmployeesDto, UpdateStateEmployeesDto } from "../../../domain";
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

    UpdateNameEmployeesDto(updateNameEmployeesDto:UpdateNameEmployeesDto): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.UpdateNameEmployeesDto(updateNameEmployeesDto);
    }
    UpdateLastNameEmployeesDto(updateLastNameEmployeesDto:UpdateLastNameEmployeesDto): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.UpdateLastNameEmployeesDto(updateLastNameEmployeesDto);
    }

    UpdateEmailEmployeesDto(updateEmailEmployeesDto:UpdateEmailEmployeesDto): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.UpdateEmailEmployeesDto(updateEmailEmployeesDto);
    }

    UpdatePhoneEmployeesDto(updatePhoneEmployeesDto:UpdatePhoneEmployeesDto): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.UpdatePhoneEmployeesDto(updatePhoneEmployeesDto);
    }
    UpdateAddressEmployeesDto(updateAddressEmployeesDto:UpdateAddressEmployeesDto): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.UpdateAddressEmployeesDto(updateAddressEmployeesDto);
    }

    UpdateStateEmployeesDto(updateStateEmployeesDto:UpdateStateEmployeesDto): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.UpdateStateEmployeesDto(updateStateEmployeesDto);
    }

    updateEmployeeImg(id: number, img: string): Promise<EmployeesEntity | null> {
        return this.authEmployeesDataSource.updateEmployeeImg(id, img);
    }

}