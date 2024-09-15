import { EmployeesEntity } from "../../../data";
import { RegisterEmployeesDto, LoginEmployeesDto, UpdateAddressEmployeesDto, UpdateEmailEmployeesDto, UpdateLastNameEmployeesDto, UpdateNameEmployeesDto, UpdatePhoneEmployeesDto, UpdateStateEmployeesDto } from "../../dto/auth/employees/register-employees.dto";

export abstract class AuthEmployeesDataSource {
    abstract register(registerEmployeesDto:RegisterEmployeesDto): Promise<{ message: string }>
    abstract login(loginEmployeesDto:LoginEmployeesDto): Promise<{ token: string, role: string | undefined, message: string  }>;
    abstract getAllEmployees(): Promise<EmployeesEntity[]>;
    abstract getEmployeeById(id: number): Promise<EmployeesEntity | null>;
    abstract getEmployeeByEmail(email: string): Promise<EmployeesEntity | null>;
    abstract UpdateNameEmployeesDto(updateNameEmployeesDto: UpdateNameEmployeesDto): Promise<EmployeesEntity | null>
    abstract UpdateLastNameEmployeesDto(updateLastNameEmployeesDto: UpdateLastNameEmployeesDto): Promise<EmployeesEntity | null>
    abstract UpdateEmailEmployeesDto(updateEmailEmployeesDto: UpdateEmailEmployeesDto): Promise<EmployeesEntity | null>
    abstract UpdatePhoneEmployeesDto(updatePhoneEmployeesDto: UpdatePhoneEmployeesDto): Promise<EmployeesEntity | null>
    abstract UpdateAddressEmployeesDto(updateAddressEmployeesDto: UpdateAddressEmployeesDto): Promise<EmployeesEntity | null>
    abstract UpdateStateEmployeesDto(updateStateEmployeesDto: UpdateStateEmployeesDto): Promise<EmployeesEntity | null>
    abstract updateEmployeeImg(id: number, img: string): Promise<EmployeesEntity | null>

}