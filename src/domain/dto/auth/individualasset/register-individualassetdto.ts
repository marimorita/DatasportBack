import { Validators } from '../../../../config'

export class RegisterIndividualAssetsDto {
    private constructor(
        
        public name: string, 
        public description: string,
        public adquisitionDate: Date,
        public state: string,
        public condition: string,
        public img: string,
        public lastMaintenance: string,
        public nextMaintenance: string,
        public idAssets: number,
    ){}

        static create( object: {[ key: string]: any;}): [ string?, RegisterIndividualAssetsDto?] {

            const { name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets } = object;
            
            if ( !name ) return [ 'Falta Nombre' ];
            if ( !Validators.text.test( name ) ) return [ 'Nombre no valido'];

            if ( !description ) return [ 'Falta description' ];

            if ( !state ) return [ 'Falta Estado' ];
            if ( !Validators.text.test( state ) ) return [ 'Estado no valido'];

            if ( !condition ) return [ 'Falta Estado' ];
            if ( !Validators.text.test( condition ) ) return [ 'Condicion no valida'];

            if ( !lastMaintenance ) return [ 'Falta Ultimo Mantenimiento' ];
            if ( !Validators.date.test( lastMaintenance ) ) return [ 'Ultimo Mantenimiento no valido'];

            if ( !nextMaintenance ) return [ 'Falta Siguiente Mantenimiento' ];
            if ( !Validators.date.test( nextMaintenance ) ) return [ 'Siguiente Mantenimiento no valido'];

            if ( !idAssets ) return [ 'Falta Referencia de bienes' ];
            if ( !Validators.number.test( idAssets ) ) return [ 'Referencia de bienes no valida'];

            
            return [
                undefined,
                new RegisterIndividualAssetsDto(name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets)
            ];
        }
}