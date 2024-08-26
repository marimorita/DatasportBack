import { ProductsEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class ProductsMapper {
    public static toDomain(object: any): ProductsEntity {
        const { name, description, state, stock, img, price, idCenter } = object;


        if (!name) throw CustomError.badRequest("Falta Nombre");
        if (!description) throw CustomError.badRequest("Falta Descripcion");
        if (!state) throw CustomError.badRequest("Falta Estado");
        if (!stock) throw CustomError.badRequest("Falta Cantidad")
        if (!img) throw CustomError.badRequest("Falta Imagen")
        if (!price) throw CustomError.badRequest("Falta Precio");
        if (!idCenter) throw CustomError.badRequest("Falta el id del Center");

        return {
            name,
            description,
            state,
            stock,
            img,
            price,
            idCenter,
        };
    }

    public static toPersistence(entity: ProductsEntity): any {
        return {
            name: entity.name,
            description: entity.description,
            state: entity.state,
            stock: entity.stock,
            img: entity.img,
            price: entity.price,
            idCenter: entity.idCenter,
        };
    }
}