import { Validators } from '../../../../config'

export class RegisterProductsDto {
    private constructor(
        
        public name: string, 
        public description: string,
        public state: string,
        public stock: number,
        public img: string,
        public price: number,
        public idCenter: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterProductsDto?] {

            const {name, description, state, stock, img, price, idCenter } = object;
            
            if ( !name ) return [ 'Falta Nombre' ];
            if ( !Validators.text.test( name ) ) return [ 'Nombre no valido'];


            if ( !description ) return [ 'Falta description' ];

            if ( !state ) return [ 'Falta estado' ];

            if ( !stock ) return [ 'Falta Cantidad' ];
            if ( stock < 1 ) return [ 'Tiene que haber una Cantidad mayor a 1' ];
            if ( !Validators.number.test( stock ) ) return [ 'Cantidad no valido'];

            if ( !price ) return [ 'Falta precio' ];
            if ( !Validators.number.test( price ) ) return [ 'Precio no valido'];

            if ( !idCenter ) return [ 'Falta idCenter' ];
            if ( !Validators.number.test( idCenter ) ) return [ 'Solo caracteres numericos en id centro'];
            
            return [
                undefined,
                new RegisterProductsDto(name, description, state, stock, img, price, idCenter)
            ];
        }
}