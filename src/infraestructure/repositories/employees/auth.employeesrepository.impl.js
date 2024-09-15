"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEmployeesRepositoryImpl = void 0;
class AuthEmployeesRepositoryImpl {
    constructor(authEmployeesDataSource) {
        this.authEmployeesDataSource = authEmployeesDataSource;
    }
    register(registerEmployeesDto) {
        return this.authEmployeesDataSource.register(registerEmployeesDto);
    }
    login(loginEmployeesDto) {
        return this.authEmployeesDataSource.login(loginEmployeesDto);
    }
    getAllEmployees() {
        return this.authEmployeesDataSource.getAllEmployees();
    }
    getEmployeeById(id) {
        return this.authEmployeesDataSource.getEmployeeById(id);
    }
    getEmployeeByEmail(email) {
        return this.authEmployeesDataSource.getEmployeeByEmail(email); // Implementa esta lógica en el DataSource
    }
    UpdateNameEmployeesDto(updateNameEmployeesDto) {
        return this.authEmployeesDataSource.UpdateNameEmployeesDto(updateNameEmployeesDto);
    }
    UpdateLastNameEmployeesDto(updateLastNameEmployeesDto) {
        return this.authEmployeesDataSource.UpdateLastNameEmployeesDto(updateLastNameEmployeesDto);
    }
    UpdateEmailEmployeesDto(updateEmailEmployeesDto) {
        return this.authEmployeesDataSource.UpdateEmailEmployeesDto(updateEmailEmployeesDto);
    }
    UpdatePhoneEmployeesDto(updatePhoneEmployeesDto) {
        return this.authEmployeesDataSource.UpdatePhoneEmployeesDto(updatePhoneEmployeesDto);
    }
    UpdateAddressEmployeesDto(updateAddressEmployeesDto) {
        return this.authEmployeesDataSource.UpdateAddressEmployeesDto(updateAddressEmployeesDto);
    }
    UpdateStateEmployeesDto(updateStateEmployeesDto) {
        return this.authEmployeesDataSource.UpdateStateEmployeesDto(updateStateEmployeesDto);
    }
    updateEmployeeImg(id, img) {
        return this.authEmployeesDataSource.updateEmployeeImg(id, img);
    }
}
exports.AuthEmployeesRepositoryImpl = AuthEmployeesRepositoryImpl;
