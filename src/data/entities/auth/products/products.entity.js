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
exports.ProductsEntity = void 0;
// src/domain/entity/ClientEntity.ts
const typeorm_1 = require("typeorm");
let ProductsEntity = class ProductsEntity {
};
exports.ProductsEntity = ProductsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_Producto' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Nombre' }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Descripcion' }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Estado' }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Stock' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Imagen' }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Precio' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Id_Centro' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "idCenter", void 0);
exports.ProductsEntity = ProductsEntity = __decorate([
    (0, typeorm_1.Entity)('Producto')
], ProductsEntity);
