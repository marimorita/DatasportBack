"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterEstablishmentDto = void 0;
const config_1 = require("../../../../config");
class RegisterEstablishmentDto {
    constructor(name, email, phone, address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
    static create(object) {
        const { name, email, address, phone } = object;
        if (!name)
            return ['Missing name'];
        if (!email)
            return ['Missing email'];
        if (!phone)
            return ['Missing phone'];
        if (!address)
            return ['Missing address'];
        if (!config_1.Validators.email.test(email))
            return ['Email is not valid '];
        return [
            undefined,
            new RegisterEstablishmentDto(name, email, phone, address)
        ];
    }
}
exports.RegisterEstablishmentDto = RegisterEstablishmentDto;
