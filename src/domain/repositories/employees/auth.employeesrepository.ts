import { EmployeesEntity } from "../../../data";
import { RegisterEmployeesDto, LoginEmployeesDto } from "../../dto/auth/employees/register-employees.dto";

export abstract class AuthEmployeesRepository {
    abstract register(registerEmployeesDto:RegisterEmployeesDto): Promise<{ message: string }>
    abstract login(loginEmployeesDto:LoginEmployeesDto): Promise<{ token: string, role: string | undefined, message: string }>;

    abstract getEmployeeById(id: number): Promise<EmployeesEntity | null>;
    abstract getEmployeeByEmail(email: string): Promise<EmployeesEntity | null>;
    abstract updateEmployeeImg(id: number, img: string): Promise<EmployeesEntity | null>

}