import { Validators } from '../../../../config'

export class RegisterClientDto {
    private constructor(

        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public address: string,
        public phone: number,
        // public assistance: string,
        public idCenter: number,
        public state: string,
        public img: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, RegisterClientDto?] {

        const { id, name, lastName, email, address, phone, idCenter, state, img } = object;

        if (!id) return ['Falta la cedula'];
        if (!Validators.number.test(id)) return ['Solo caracteres numericos en numero de cedula'];

        if (!name) return ['Falta el Nombre'];
        if (!Validators.text.test(name)) return ['Nombre no valido'];

        if (!lastName) return ['Falta el apellido'];
        if (!Validators.text.test(lastName)) return ['Apellido no valido'];

        if (!email) return ['Falta el Correo'];
        if (!Validators.email.test(email)) return ['Email is not valid '];

        if (!phone) return ['Falta el Numero telefonico'];
        if (phone.length < 10) return ['Numero telefonico muy corto'];
        if (phone.length > 12) return ['Numero telefonico muy largo'];
        if (!Validators.number.test(phone)) return ['Solo caracteres numericos en numero telefonico'];

        if (!address) return ['Falta la direccion'];

        // if ( !assistance ) return [ 'Falta la Asistencia' ];
        // if ( !Validators.text.test( assistance ) ) return [ 'Asistencia no valido'];

        if (!state) return ['Falta el Estado'];
        if (!Validators.text.test(state)) return ['Estado no valido'];

        // if ( !img ) return [ 'Falta la Imagen' ];

        if (!idCenter) return ['Falta el id del Centro'];
        if (!Validators.number.test(idCenter)) return ['Solo caracteres numericos en id centro'];

        return [
            undefined,
            new RegisterClientDto(id, name, lastName, email, address, phone, idCenter, state, img)
        ];
    }
}

export class UpdateNameClientDto {
    private constructor(
        public id: number,
        public name: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateNameClientDto?] {

        const { id, name } = object;

        if (!Validators.text.test(name)) return ['Nombre no valido'];


        return [
            undefined,
            new UpdateNameClientDto(id, name)
        ];
    }
}

export class UpdateLastNameClientDto {
    private constructor(
        public id: number,
        public lastName: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateLastNameClientDto?] {

        const { id, lastName } = object;

        if (!Validators.text.test(lastName)) return ['Apellido no valido'];


        return [
            undefined,
            new UpdateLastNameClientDto(id, lastName)
        ];
    }
}

export class UpdateEmailClientDto {
    private constructor(
        public id: number,
        public email: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateEmailClientDto?] {

        const { id, email } = object;

        if (!Validators.email.test(email)) return ['Correo no valido'];


        return [
            undefined,
            new UpdateEmailClientDto(id, email)
        ];
    }
}
export class UpdatePhoneClientDto {
    private constructor(
        public id: number,
        public phone: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdatePhoneClientDto?] {

        const { id, phone } = object;

        if (phone.length < 10) return ['Numero telefonico muy corto'];
        if (phone.length > 12) return ['Numero telefonico muy largo'];
        if (!Validators.number.test(phone)) return ['Numero no valido'];


        return [
            undefined,
            new UpdatePhoneClientDto(id, phone)
        ];
    }
}

export class UpdateAddressClientDto {
    private constructor(
        public id: number,
        public address: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateAddressClientDto?] {

        const { id, address } = object;

        return [
            undefined,
            new UpdateAddressClientDto(id, address)
        ];
    }
}

export class UpdateStateClientDto {
    private constructor(
        public id: number,
        public state: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateStateClientDto?] {

        const { id, state } = object;

        return [
            undefined,
            new UpdateStateClientDto(id, state)
        ];
    }
}

export class UpdateImgClientDto {
    private constructor(
        public id: number,
        public img: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateImgClientDto?] {

        const { id, img } = object;

        return [
            undefined,
            new UpdateImgClientDto(id, img)
        ];
    }
}