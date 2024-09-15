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
exports.IndividualAssetsEntity = void 0;
// src/domain/entity/ClientEntity.ts
const typeorm_1 = require("typeorm");
let IndividualAssetsEntity = class IndividualAssetsEntity {
};
exports.IndividualAssetsEntity = IndividualAssetsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_BienIndividual' }),
    __metadata("design:type", Number)
], IndividualAssetsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Nombre' }),
    __metadata("design:type", String)
], IndividualAssetsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Descripcion' }),
    __metadata("design:type", String)
], IndividualAssetsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'fecha_adquisición' }),
    __metadata("design:type", Date)
], IndividualAssetsEntity.prototype, "adquisitionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Estado' }),
    __metadata("design:type", String)
], IndividualAssetsEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Condicion' }),
    __metadata("design:type", String)
], IndividualAssetsEntity.prototype, "condition", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Imagen' }),
    __metadata("design:type", String)
], IndividualAssetsEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'Ultimo_mantenimiento' }),
    __metadata("design:type", Date)
], IndividualAssetsEntity.prototype, "lastMaintenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'Siguiente_mantenimiento' }),
    __metadata("design:type", Date)
], IndividualAssetsEntity.prototype, "nextMaintenance", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Id_Bienes' }),
    __metadata("design:type", Number)
], IndividualAssetsEntity.prototype, "idAssets", void 0);
exports.IndividualAssetsEntity = IndividualAssetsEntity = __decorate([
    (0, typeorm_1.Entity)('BienIndividual')
], IndividualAssetsEntity);
