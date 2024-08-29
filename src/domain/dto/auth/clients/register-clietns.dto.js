"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterClientDto = void 0;
const config_1 = require("../../../../config");
class RegisterClientDto {
    constructor(id, name, lastName, email, address, phone, 
    // public assistance: string,
    idCenter, state, img) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.idCenter = idCenter;
        this.state = state;
        this.img = img;
    }
    static create(object) {
        const { id, name, lastName, email, address, phone, idCenter, state, img } = object;
        if (!id)
            return ['Falta la cedula'];
        if (!config_1.Validators.number.test(id))
            return ['Solo caracteres numericos en numero de cedula'];
        if (!name)
            return ['Falta el Nombre'];
        if (!config_1.Validators.text.test(name))
            return ['Nombre no valido'];
        if (!lastName)
            return ['Falta el apellido'];
        if (!config_1.Validators.text.test(lastName))
            return ['Apellido no valido'];
        if (!email)
            return ['Falta el Correo'];
        if (!config_1.Validators.email.test(email))
            return ['Email is not valid '];
        if (!phone)
            return ['Falta el Numero telefonico'];
        if (phone.length < 10)
            return ['Numero telefonico muy corto'];
        if (phone.length > 12)
            return ['Numero telefonico muy largo'];
        if (!config_1.Validators.number.test(phone))
            return ['Solo caracteres numericos en numero telefonico'];
        if (!address)
            return ['Falta la direccion'];
        // if ( !assistance ) return [ 'Falta la Asistencia' ];
        // if ( !Validators.text.test( assistance ) ) return [ 'Asistencia no valido'];
        if (!state)
            return ['Falta el Estado'];
        if (!config_1.Validators.text.test(state))
            return ['Estado no valido'];
        // if ( !img ) return [ 'Falta la Imagen' ];
        if (!idCenter)
            return ['Falta el id del Centro'];
        if (!config_1.Validators.number.test(idCenter))
            return ['Solo caracteres numericos en id centro'];
        return [
            undefined,
            new RegisterClientDto(id, name, lastName, email, address, phone, idCenter, state, img)
        ];
    }
}
exports.RegisterClientDto = RegisterClientDto;
