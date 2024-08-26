import { Validators } from '../../../../config'

export class RegisterEstablishmentDto {
    private constructor(
        
        public name: string, 
        public email: string,
        public phone: number,
        public address: string,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterEstablishmentDto?] {

            const { name, email, address, phone } = object;

            if ( !name ) return [ 'Missing name' ];
            if ( !email ) return [ 'Missing email' ];
            if ( !phone ) return [ 'Missing phone' ];
            if ( !address ) return [ 'Missing address' ];
            if ( !Validators.email.test( email ) ) return [ 'Email is not valid '];
            
            return [
                undefined,
                new RegisterEstablishmentDto(name, email, phone, address)
            ];
        }
}