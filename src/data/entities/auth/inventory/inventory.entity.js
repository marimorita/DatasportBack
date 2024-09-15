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
exports.InvetoryEntity = void 0;
// src/domain/entity/ClientEntity.ts
const typeorm_1 = require("typeorm");
let InvetoryEntity = class InvetoryEntity {
};
exports.InvetoryEntity = InvetoryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ID_Inventario' }),
    __metadata("design:type", Number)
], InvetoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Nombre' }),
    __metadata("design:type", String)
], InvetoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Cantidad' }),
    __metadata("design:type", Number)
], InvetoryEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Estado' }),
    __metadata("design:type", String)
], InvetoryEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Id_Centro ' }),
    __metadata("design:type", Number)
], InvetoryEntity.prototype, "idCenter", void 0);
exports.InvetoryEntity = InvetoryEntity = __decorate([
    (0, typeorm_1.Entity)('INVENTARIO')
], InvetoryEntity);
