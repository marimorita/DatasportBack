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
    getEmployeeById(id) {
        return this.authEmployeesDataSource.getEmployeeById(id);
    }
    getEmployeeByEmail(email) {
        return this.authEmployeesDataSource.getEmployeeByEmail(email); // Implementa esta lógica en el DataSource
    }
    updateEmployeeImg(id, img) {
        return this.authEmployeesDataSource.updateEmployeeImg(id, img);
    }
}
exports.AuthEmployeesRepositoryImpl = AuthEmployeesRepositoryImpl;
