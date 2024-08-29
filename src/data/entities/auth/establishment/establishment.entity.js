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
exports.EstablishmentEntity = void 0;
// src/domain/entity/ClientEntity.ts
const typeorm_1 = require("typeorm");
let EstablishmentEntity = class EstablishmentEntity {
};
exports.EstablishmentEntity = EstablishmentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_Centro' }),
    __metadata("design:type", Number)
], EstablishmentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Nombre' }),
    __metadata("design:type", String)
], EstablishmentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, name: 'Email' }),
    __metadata("design:type", String)
], EstablishmentEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Telefono' }),
    __metadata("design:type", Number)
], EstablishmentEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Direccion' }),
    __metadata("design:type", String)
], EstablishmentEntity.prototype, "address", void 0);
exports.EstablishmentEntity = EstablishmentEntity = __decorate([
    (0, typeorm_1.Entity)('centrodeportivo')
], EstablishmentEntity);
