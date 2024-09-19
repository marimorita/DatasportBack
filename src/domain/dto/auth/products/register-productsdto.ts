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

            if ( !state ) return [ 'Falta estado ' ];

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

export class UpdateNameProductsDto {
    private constructor(
        public id: number,
        public name: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateNameProductsDto?] {

        const { id, name } = object;

        return [
            undefined,
            new UpdateNameProductsDto(id, name)
        ];
    }
}

export class UpdateDescriptionProductsDto {
    private constructor(
        public id: number,
        public description: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateDescriptionProductsDto?] {

        const { id, description } = object;

        return [
            undefined,
            new UpdateDescriptionProductsDto(id, description)
        ];
    }
}

export class UpdateStateProductsDto {
    private constructor(
        public id: number,
        public state: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateStateProductsDto?] {

        const { id, state } = object;

        return [
            undefined,
            new UpdateStateProductsDto(id, state)
        ];
    }
}

export class UpdateStockProductsDto {
    private constructor(
        public id: number,
        public stock: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateStockProductsDto?] {

        const { id, stock } = object;

        return [
            undefined,
            new UpdateStockProductsDto(id, stock)
        ];
    }
}

export class UpdateImgProductsDto {
    private constructor(
        public id: number,
        public img: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateImgProductsDto?] {

        const { id, img } = object;

        return [
            undefined,
            new UpdateImgProductsDto(id, img)
        ];
    }
}

export class UpdatePriceProductsDto {
    private constructor(
        public id: number,
        public price: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdatePriceProductsDto?] {

        const { id, price } = object;

        return [
            undefined,
            new UpdatePriceProductsDto(id, price)
        ];
    }
}