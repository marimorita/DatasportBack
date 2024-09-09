import { Validators } from '../../../../config'

export class RegisterAdministratorDto {
    private constructor(

        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public phone: number,
        public address: string,
        public password: string,
        public img: string,
        public role: string,
        public idCenter: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, RegisterAdministratorDto?] {

        const { id, name, lastName, email, password, address, phone, img, role, idCenter } = object;

        if (!id) return ['Falta la Cedula'];
        if (!Validators.number.test(id)) return ['Solo caracteres numericos en Cedula'];

        if (!name) return ['Falta el Nombre'];
        if (!Validators.text.test(name)) return ['Nombre no valido'];

        if (!lastName) return ['Falta el Apellido'];
        if (!Validators.text.test(lastName)) return ['Apellido no valido'];

        if (!email) return ['Falta el Correo'];
        if (!Validators.email.test(email)) return ['Correo no valido'];

        if (!phone) return ['Falta el Numero telefonico'];
        if (phone.length < 10) return ['Numero telefonico muy corto'];
        if (phone.length > 12) return ['Numero telefonico muy largo'];
        if (!Validators.number.test(phone)) return ['Solo caracteres numericos en numero telefonico'];

        if (!role) return ['Falta el Rol'];
        if (!Validators.text.test(role)) return ['Rol no valido'];

        if (!idCenter) return ['Falta el id del Centro'];
        if (phone.length > 12) return ['Numero telefonico muy largo'];
        if (!Validators.number.test(idCenter)) return ['Solo caracteres numericos en id centro'];

        if (!address) return ['Falta la direccion'];

        if (!password) return ['Falta la contraseña'];
        if (password.length < 6) return ['Contraseña muy corta'];

        return [
            undefined,
            new RegisterAdministratorDto(id, name, lastName, email, phone, address, password, img, role, idCenter)
        ];
    }
}

export class LoginAdministratorDto {
    private constructor(
        public email: string,
        public password: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, LoginAdministratorDto?] {

        const { email, password } = object;

        if (!email && !password) return ['Falta el correo y contraseña']

        if (!email) return ['Falta el Correo'];
        if (!Validators.email.test(email)) return ['Correo no valido'];

        if (!password) return ['Falta la contraseña'];
        if (password.length < 6) return ['Contraseña muy corta'];

        return [
            undefined,
            new LoginAdministratorDto(email, password)
        ];
    }
}

export class UpdateNameAdministratorDto {
    private constructor(
        public id: number,
        public name: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateNameAdministratorDto?] {

        const { id, name } = object;

        if (!Validators.text.test(name)) return ['Nombre no valido'];


        return [
            undefined,
            new UpdateNameAdministratorDto(id, name)
        ];
    }
}

// export class UpdateIdAdministratorDto {
//     private constructor(
//         public id: number,
//     ) { }

//     static create(object: { [key: string]: any; }): [string?, UpdateIdAdministratorDto?] {

//         const { id } = object;

//         if (!Validators.number.test(id)) return ['Documento no valido'];


//         return [
//             undefined,
//             new UpdateIdAdministratorDto(id)
//         ];
//     }
// }

export class UpdatePhoneAdministratorDto {
    private constructor(
        public id: number,
        public phone: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdatePhoneAdministratorDto?] {

        const { id, phone } = object;

        if (phone.length < 10) return ['Numero telefonico muy corto'];
        if (phone.length > 12) return ['Numero telefonico muy largo'];
        if (!Validators.number.test(phone)) return ['Numero no valido'];


        return [
            undefined,
            new UpdatePhoneAdministratorDto(id, phone)
        ];
    }
}

export class UpdateEmailAdministratorDto {
    private constructor(
        public id: number,
        public email: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateEmailAdministratorDto?] {

        const { id, email } = object;

        if (!Validators.email.test(email)) return ['Correo no valido'];


        return [
            undefined,
            new UpdateEmailAdministratorDto(id, email)
        ];
    }
}