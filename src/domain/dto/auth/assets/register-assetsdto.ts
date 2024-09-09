import { Validators } from '../../../../config'

export class RegisterAssetsDto {
    private constructor(

        public id: number,
        public name: string,
        public description: string,
        public img: string,
        public stock: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, RegisterAssetsDto?] {

        const { id, name, description, img, stock } = object;

        if (!name) return ['Falta Nombre'];

        if (!description) return ['Falta description'];

        if (!stock) return ['Falta Cantidad'];
        if (stock < 1) return ['Tiene que haber una Cantidad mayor a 1'];
        if (stock > 300) return ['Tiene que haber una Cantidad menor a 300'];
        if (!Validators.number.test(stock)) return ['Cantidad no valida'];

        return [
            undefined,
            new RegisterAssetsDto(id, name, description, img, stock)
        ];
    }
}

export class UpdateStockAssetsDto {
    private constructor(
        public id: number,
        public stock: number,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateStockAssetsDto?] {

        const { id, stock } = object;

        if (stock < 1) return ['Tiene que haber una Cantidad mayor a 1'];
        if (stock > 300) return ['Tiene que haber una Cantidad menor a 300'];
        if (!Validators.number.test(stock)) return ['Cantidad no valida'];

        return [
            undefined,
            new UpdateStockAssetsDto(id, stock)
        ];
    }
}

export class UpdateNameAssetsDto {
    private constructor(
        public id: number,
        public name: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateNameAssetsDto?] {

        const { id, name } = object;

        return [
            undefined,
            new UpdateNameAssetsDto(id, name)
        ];
    }
}

export class UpdateDescriptionAssetsDto {
    private constructor(
        public id: number,
        public description: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateDescriptionAssetsDto?] {

        const { id, description } = object;

        return [
            undefined,
            new UpdateDescriptionAssetsDto(id, description)
        ];
    }
}

export class UpdateImgAssetsDto {
    private constructor(
        public id: number,
        public img: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, UpdateImgAssetsDto?] {

        const { id, img } = object;

        return [
            undefined,
            new UpdateImgAssetsDto(id, img)
        ];
    }
}