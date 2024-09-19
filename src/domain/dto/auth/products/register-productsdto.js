"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePriceProductsDto = exports.UpdateImgProductsDto = exports.UpdateStockProductsDto = exports.UpdateStateProductsDto = exports.UpdateDescriptionProductsDto = exports.UpdateNameProductsDto = exports.RegisterProductsDto = void 0;
const config_1 = require("../../../../config");
class RegisterProductsDto {
    constructor(name, description, state, stock, img, price, idCenter) {
        this.name = name;
        this.description = description;
        this.state = state;
        this.stock = stock;
        this.img = img;
        this.price = price;
        this.idCenter = idCenter;
    }
    static create(object) {
        const { name, description, state, stock, img, price, idCenter } = object;
        if (!name)
            return ['Falta titulo'];
        if (!description)
            return ['Falta descripcion'];
        if (!state)
            return ['Falta estado'];
        if (!stock)
            return ['Falta Cantidad'];
        if (stock < 1)
            return ['Tiene que haber una Cantidad mayor a 1'];
        if (!config_1.Validators.number.test(stock))
            return ['Cantidad no valido'];
        if (!price)
            return ['Falta precio'];
        if (!config_1.Validators.number.test(price))
            return ['Precio no valido'];
        if (!idCenter)
            return ['Falta idCenter'];
        if (!config_1.Validators.number.test(idCenter))
            return ['Solo caracteres numericos en id centro'];
        return [
            undefined,
            new RegisterProductsDto(name, description, state, stock, img, price, idCenter)
        ];
    }
}
exports.RegisterProductsDto = RegisterProductsDto;
class UpdateNameProductsDto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static create(object) {
        const { id, name } = object;
        return [
            undefined,
            new UpdateNameProductsDto(id, name)
        ];
    }
}
exports.UpdateNameProductsDto = UpdateNameProductsDto;
class UpdateDescriptionProductsDto {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
    static create(object) {
        const { id, description } = object;
        return [
            undefined,
            new UpdateDescriptionProductsDto(id, description)
        ];
    }
}
exports.UpdateDescriptionProductsDto = UpdateDescriptionProductsDto;
class UpdateStateProductsDto {
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
    static create(object) {
        const { id, state } = object;
        return [
            undefined,
            new UpdateStateProductsDto(id, state)
        ];
    }
}
exports.UpdateStateProductsDto = UpdateStateProductsDto;
class UpdateStockProductsDto {
    constructor(id, stock) {
        this.id = id;
        this.stock = stock;
    }
    static create(object) {
        const { id, stock } = object;
        return [
            undefined,
            new UpdateStockProductsDto(id, stock)
        ];
    }
}
exports.UpdateStockProductsDto = UpdateStockProductsDto;
class UpdateImgProductsDto {
    constructor(id, img) {
        this.id = id;
        this.img = img;
    }
    static create(object) {
        const { id, img } = object;
        return [
            undefined,
            new UpdateImgProductsDto(id, img)
        ];
    }
}
exports.UpdateImgProductsDto = UpdateImgProductsDto;
class UpdatePriceProductsDto {
    constructor(id, price) {
        this.id = id;
        this.price = price;
    }
    static create(object) {
        const { id, price } = object;
        return [
            undefined,
            new UpdatePriceProductsDto(id, price)
        ];
    }
}
exports.UpdatePriceProductsDto = UpdatePriceProductsDto;
