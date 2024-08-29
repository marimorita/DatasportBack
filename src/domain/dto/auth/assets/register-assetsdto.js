"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAssetsDto = void 0;
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
        if (!config_1.Validators.text.test(name))
            return ['Nombre no valido'];
        if (!description)
            return ['Falta description'];
        if (!stock)
            return ['Falta Cantidad'];
        if (stock < 1)
            return ['Tiene que haber una Cantidad mayor a 1'];
        if (!config_1.Validators.number.test(stock))
            return ['Cantidad no valido'];
        return [
            undefined,
            new RegisterAssetsDto(id, name, description, img, stock)
        ];
    }
}
exports.RegisterAssetsDto = RegisterAssetsDto;
