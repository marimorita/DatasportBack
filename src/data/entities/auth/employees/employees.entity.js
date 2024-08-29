"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesEntity = void 0;
// src/domain/entity/ClientEntity.ts
const typeorm_1 = require("typeorm");
let EmployeesEntity = class EmployeesEntity {
};
exports.EmployeesEntity = EmployeesEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Cedula_Empleado' }),
    __metadata("design:type", Number)
], EmployeesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Nombres' }),
    __metadata("design:type", String)
], EmployeesEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Apellidos' }),
    __metadata("design:type", String)
], EmployeesEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Direccion' }),
    __metadata("design:type", String)
], EmployeesEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Telefono' }),
    __metadata("design:type", Number)
], EmployeesEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: 'Email' }),
    __metadata("design:type", String)
], EmployeesEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Contraseña' }),
    __metadata("design:type", String)
], EmployeesEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Imagen' }),
    __metadata("design:type", String)
], EmployeesEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Rol' }),
    __metadata("design:type", String)
], EmployeesEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Id_Centro' }),
    __metadata("design:type", Number)
], EmployeesEntity.prototype, "idCenter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Estado' }),
    __metadata("design:type", Number)
], EmployeesEntity.prototype, "state", void 0);
exports.EmployeesEntity = EmployeesEntity = __decorate([
    (0, typeorm_1.Entity)('Empleado')
], EmployeesEntity);
