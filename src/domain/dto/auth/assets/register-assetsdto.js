"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImgAssetsDto = exports.UpdateDescriptionAssetsDto = exports.UpdateNameAssetsDto = exports.UpdateStockAssetsDto = exports.RegisterAssetsDto = void 0;
const config_1 = require("../../../../config");
class RegisterAssetsDto {
    constructor(id, name, description, img, stock) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.stock = stock;
    }
    static create(object) {
        const { id, name, description, img, stock } = object;
        if (!name)
            return ['Falta Nombre'];
        if (!description)
            return ['Falta description'];
        if (!stock)
            return ['Falta Cantidad'];
        if (stock < 1)
            return ['Tiene que haber una Cantidad mayor a 1'];
        if (stock > 300)
            return ['Tiene que haber una Cantidad menor a 300'];
        if (!config_1.Validators.number.test(stock))
            return ['Cantidad no valida'];
        return [
            undefined,
            new RegisterAssetsDto(id, name, description, img, stock)
        ];
    }
}
exports.RegisterAssetsDto = RegisterAssetsDto;
class UpdateStockAssetsDto {
    constructor(id, stock) {
        this.id = id;
        this.stock = stock;
    }
    static create(object) {
        const { id, stock } = object;
        if (stock < 1)
            return ['Tiene que haber una Cantidad mayor a 1'];
        if (stock > 300)
            return ['Tiene que haber una Cantidad menor a 300'];
        if (!config_1.Validators.number.test(stock))
            return ['Cantidad no valida'];
        return [
            undefined,
            new UpdateStockAssetsDto(id, stock)
        ];
    }
}
exports.UpdateStockAssetsDto = UpdateStockAssetsDto;
class UpdateNameAssetsDto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static create(object) {
        const { id, name } = object;
        return [
            undefined,
            new UpdateNameAssetsDto(id, name)
        ];
    }
}
exports.UpdateNameAssetsDto = UpdateNameAssetsDto;
class UpdateDescriptionAssetsDto {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
    static create(object) {
        const { id, description } = object;
        return [
            undefined,
            new UpdateDescriptionAssetsDto(id, description)
        ];
    }
}
exports.UpdateDescriptionAssetsDto = UpdateDescriptionAssetsDto;
class UpdateImgAssetsDto {
    constructor(id, img) {
        this.id = id;
        this.img = img;
    }
    static create(object) {
        const { id, img } = object;
        return [
            undefined,
            new UpdateImgAssetsDto(id, img)
        ];
    }
}
exports.UpdateImgAssetsDto = UpdateImgAssetsDto;
