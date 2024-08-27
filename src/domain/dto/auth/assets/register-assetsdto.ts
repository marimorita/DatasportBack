import { Validators } from '../../../../config'

export class RegisterAssetsDto {
    private constructor(
        
        public id: number, 
        public name: string, 
        public description: string,
        public img: string,
        public stock: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterAssetsDto?] {

            const { id, name, description, img, stock } = object;
            
            if ( !name ) return [ 'Falta Nombre' ];
            if ( !Validators.text.test( name ) ) return [ 'Nombre no valido'];

            if ( !description ) return [ 'Falta description' ];
            
            if ( !stock ) return [ 'Falta Cantidad' ];
            if ( stock < 1 ) return [ 'Tiene que haber una Cantidad mayor a 1' ];
            if ( !Validators.number.test( stock ) ) return [ 'Cantidad no valido'];
            
            return [
                undefined,
                new RegisterAssetsDto(id, name, description, img, stock)
            ];
        }
}