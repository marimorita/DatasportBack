import { AssetsEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class AssetsMapper {
    public static toDomain(object: any): AssetsEntity {
        const { id, name, description, img, stock } = object;


        if (!name) throw CustomError.badRequest("Falta Nombre");
        if (!description) throw CustomError.badRequest("Falta Descripcion");
        if (!img) throw CustomError.badRequest("Falta Imagen")
        if (!stock) throw CustomError.badRequest("Falta Cantidad")

        return {
            id,
            name,
            description,
            img,
            stock,
        };
    }

    public static toPersistence(entity: AssetsEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            img: entity.img,
            stock: entity.stock,
        };
    }
}