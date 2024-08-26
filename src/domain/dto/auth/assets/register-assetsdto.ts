import { Validators } from '../../../../config'

export class RegisterAssetsDto {
    private constructor(
        
        public id: number, 
        public name: string, 
        public description: string,
        public stock: number,
        public price: number,
        public img: string,
        public condition: string,
        public lastMaintenance: Date,
        public nextMaintenance: Date,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterAssetsDto?] {

            const {id, name, description, stock, price, img, condition, lastMaintenance, nextMaintenance } = object;
            
            if ( !name ) return [ 'Falta Nombre' ];
            if ( !Validators.text.test( name ) ) return [ 'Nombre no valido'];

            if ( !description ) return [ 'Falta description' ];
            
            if ( !stock ) return [ 'Falta Cantidad' ];
            if ( stock < 1 ) return [ 'Tiene que haber una Cantidad mayor a 1' ];
            if ( !Validators.number.test( stock ) ) return [ 'Cantidad no valido'];
            
            if ( !price ) return [ 'Falta precio' ];
            if ( !Validators.number.test( price ) ) return [ 'Precio no valido'];

            if ( !condition ) return [ 'Falta Condicion' ];

            if ( !lastMaintenance ) return [ 'Falta ultimo mantenimiento' ];
            if ( !Validators.date.test( lastMaintenance ) ) return [ 'Fecha de ultimo mantenimiento no valida'];
            
            if ( !nextMaintenance ) return [ 'Falta siguiente mantenimiento' ];
            if ( !Validators.date.test( nextMaintenance ) ) return [ 'Fecha de siguiente mantenimiento no valida'];
            
            return [
                undefined,
                new RegisterAssetsDto(id, name, description, stock, price, img, condition, lastMaintenance, nextMaintenance)
            ];
        }
}