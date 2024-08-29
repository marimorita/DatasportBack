"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterProductsDto = void 0;
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
            return ['Falta Nombre'];
        if (!config_1.Validators.text.test(name))
            return ['Nombre no valido'];
        if (!description)
            return ['Falta description'];
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
