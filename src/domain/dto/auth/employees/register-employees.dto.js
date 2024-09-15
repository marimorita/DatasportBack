"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImgEmployeesDto = exports.UpdateStateEmployeesDto = exports.UpdateAddressEmployeesDto = exports.UpdatePhoneEmployeesDto = exports.UpdateEmailEmployeesDto = exports.UpdateLastNameEmployeesDto = exports.UpdateNameEmployeesDto = exports.LoginEmployeesDto = exports.RegisterEmployeesDto = void 0;
const config_1 = require("../../../../config");
class RegisterEmployeesDto {
    constructor(id, name, lastName, email, phone, address, password, img, role, idCenter, state) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.password = password;
        this.img = img;
        this.role = role;
        this.idCenter = idCenter;
        this.state = state;
    }
    static create(object) {
        const { id, name, lastName, email, password, address, phone, img, role, idCenter, state } = object;
        if (!id)
            return ['Falta la Cedula'];
        if (!config_1.Validators.number.test(id))
            return ['Solo caracteres numericos en Cedula'];
        if (!name)
            return ['Falta el Nombre'];
        if (!config_1.Validators.text.test(name))
            return ['Nombre no valido'];
        if (!lastName)
            return ['Falta el Apellido'];
        if (!config_1.Validators.text.test(name))
            return ['Apellido no valido'];
        if (!email)
            return ['Falta el Correo'];
        if (!config_1.Validators.email.test(email))
            return ['Correo no valido'];
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
        if (!role)
            return ['Falta el Rol'];
        if (!config_1.Validators.text.test(role))
            return ['Rol no valido'];
        if (!idCenter)
            return ['Falta el id del Centro'];
        if (!config_1.Validators.number.test(idCenter))
            return ['Solo caracteres numericos en id centro'];
        if (!address)
            return ['Falta la direccion'];
        if (!password)
            return ['Falta la contraseña'];
        if (password.length < 6)
            return ['Contraseña muy corta'];
        if (!state)
            return ['Falta el Estado'];
        if (!config_1.Validators.text.test(state))
            return ['Estado no valido'];
        return [
            undefined,
            new RegisterEmployeesDto(id, name, lastName, email, phone, address, password, img, role, idCenter, state)
        ];
    }
}
exports.RegisterEmployeesDto = RegisterEmployeesDto;
class LoginEmployeesDto {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { email, password } = object;
        if (!email && !password)
            return ['Falta el correo y contraseña'];
        if (!email)
            return ['Falta el Correo'];
        if (!config_1.Validators.email.test(email))
            return ['Correo no valido'];
        if (!password)
            return ['Falta la contraseña'];
        if (password.length < 6)
            return ['Contraseña muy corta'];
        return [
            undefined,
            new LoginEmployeesDto(email, password)
        ];
    }
}
exports.LoginEmployeesDto = LoginEmployeesDto;
class UpdateNameEmployeesDto {
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
            new UpdateNameEmployeesDto(id, name)
        ];
    }
}
exports.UpdateNameEmployeesDto = UpdateNameEmployeesDto;
class UpdateLastNameEmployeesDto {
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
            new UpdateLastNameEmployeesDto(id, lastName)
        ];
    }
}
exports.UpdateLastNameEmployeesDto = UpdateLastNameEmployeesDto;
class UpdateEmailEmployeesDto {
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
            new UpdateEmailEmployeesDto(id, email)
        ];
    }
}
exports.UpdateEmailEmployeesDto = UpdateEmailEmployeesDto;
class UpdatePhoneEmployeesDto {
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
            new UpdatePhoneEmployeesDto(id, phone)
        ];
    }
}
exports.UpdatePhoneEmployeesDto = UpdatePhoneEmployeesDto;
class UpdateAddressEmployeesDto {
    constructor(id, address) {
        this.id = id;
        this.address = address;
    }
    static create(object) {
        const { id, address } = object;
        return [
            undefined,
            new UpdateAddressEmployeesDto(id, address)
        ];
    }
}
exports.UpdateAddressEmployeesDto = UpdateAddressEmployeesDto;
class UpdateStateEmployeesDto {
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
    static create(object) {
        const { id, state } = object;
        return [
            undefined,
            new UpdateStateEmployeesDto(id, state)
        ];
    }
}
exports.UpdateStateEmployeesDto = UpdateStateEmployeesDto;
class UpdateImgEmployeesDto {
    constructor(id, img) {
        this.id = id;
        this.img = img;
    }
    static create(object) {
        const { id, img } = object;
        return [
            undefined,
            new UpdateImgEmployeesDto(id, img)
        ];
    }
}
exports.UpdateImgEmployeesDto = UpdateImgEmployeesDto;
