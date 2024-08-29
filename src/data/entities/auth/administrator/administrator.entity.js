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
exports.AdministratorEntity = void 0;
// src/domain/entity/ClientEntity.ts
const typeorm_1 = require("typeorm");
let AdministratorEntity = class AdministratorEntity {
};
exports.AdministratorEntity = AdministratorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Cedula_Admin' }),
    __metadata("design:type", Number)
], AdministratorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Nombres' }),
    __metadata("design:type", String)
], AdministratorEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Apellidos' }),
    __metadata("design:type", String)
], AdministratorEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Direccion' }),
    __metadata("design:type", String)
], AdministratorEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Telefono' }),
    __metadata("design:type", Number)
], AdministratorEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: 'Email' }),
    __metadata("design:type", String)
], AdministratorEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Contraseña' }),
    __metadata("design:type", String)
], AdministratorEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Imagen' }),
    __metadata("design:type", String)
], AdministratorEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Rol' }),
    __metadata("design:type", String)
], AdministratorEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ID_Centro' }),
    __metadata("design:type", Number)
], AdministratorEntity.prototype, "idCenter", void 0);
exports.AdministratorEntity = AdministratorEntity = __decorate([
    (0, typeorm_1.Entity)('Administrador')
], AdministratorEntity);
