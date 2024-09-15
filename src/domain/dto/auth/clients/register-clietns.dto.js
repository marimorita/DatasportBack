"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImgClientDto = exports.UpdateStateClientDto = exports.UpdateAddressClientDto = exports.UpdatePhoneClientDto = exports.UpdateEmailClientDto = exports.UpdateLastNameClientDto = exports.UpdateNameClientDto = exports.RegisterClientDto = void 0;
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
            return ['Correo no valida'];
        if (!phone)
            return ['Falta el Numero telefonico'];
        if (!phone.toString().startsWith("3"))
            return ['El numero tiene que empezar por 3'];
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
class UpdateNameClientDto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static create(object) {
        const { id, name } = object;
        if (!config_1.Validators.text.test(name))
            return ['Nombre no valido'];
        return [
            undefined,
            new UpdateNameClientDto(id, name)
        ];
    }
}
exports.UpdateNameClientDto = UpdateNameClientDto;
class UpdateLastNameClientDto {
    constructor(id, lastName) {
        this.id = id;
        this.lastName = lastName;
    }
    static create(object) {
        const { id, lastName } = object;
        if (!config_1.Validators.text.test(lastName))
            return ['Apellido no valido'];
        return [
            undefined,
            new UpdateLastNameClientDto(id, lastName)
        ];
    }
}
exports.UpdateLastNameClientDto = UpdateLastNameClientDto;
class UpdateEmailClientDto {
    constructor(id, email) {
        this.id = id;
        this.email = email;
    }
    static create(object) {
        const { id, email } = object;
        if (!config_1.Validators.email.test(email))
            return ['Correo no valido'];
        return [
            undefined,
            new UpdateEmailClientDto(id, email)
        ];
    }
}
exports.UpdateEmailClientDto = UpdateEmailClientDto;
class UpdatePhoneClientDto {
    constructor(id, phone) {
        this.id = id;
        this.phone = phone;
    }
    static create(object) {
        const { id, phone } = object;
        if (phone.length < 10)
            return ['Numero telefonico muy corto'];
        if (phone.length > 12)
            return ['Numero telefonico muy largo'];
        if (!config_1.Validators.number.test(phone))
            return ['Numero no valido'];
        return [
            undefined,
            new UpdatePhoneClientDto(id, phone)
        ];
    }
}
exports.UpdatePhoneClientDto = UpdatePhoneClientDto;
class UpdateAddressClientDto {
    constructor(id, address) {
        this.id = id;
        this.address = address;
    }
    static create(object) {
        const { id, address } = object;
        return [
            undefined,
            new UpdateAddressClientDto(id, address)
        ];
    }
}
exports.UpdateAddressClientDto = UpdateAddressClientDto;
class UpdateStateClientDto {
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
    static create(object) {
        const { id, state } = object;
        return [
            undefined,
            new UpdateStateClientDto(id, state)
        ];
    }
}
exports.UpdateStateClientDto = UpdateStateClientDto;
class UpdateImgClientDto {
    constructor(id, img) {
        this.id = id;
        this.img = img;
    }
    static create(object) {
        const { id, img } = object;
        return [
            undefined,
            new UpdateImgClientDto(id, img)
        ];
    }
}
exports.UpdateImgClientDto = UpdateImgClientDto;
