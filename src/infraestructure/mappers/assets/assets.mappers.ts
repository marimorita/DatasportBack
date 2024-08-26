import { AssetsEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class AssetsMapper {
    public static toDomain(object: any): AssetsEntity {
        const { id, name, description, stock, price, img, condition, lastMaintenance, nextMaintenance } = object;


        if (!name) throw CustomError.badRequest("Falta Nombre");
        if (!description) throw CustomError.badRequest("Falta Descripcion");
        if (!condition) throw CustomError.badRequest("Falta Condicion");
        if (!stock) throw CustomError.badRequest("Falta Cantidad")
        if (!img) throw CustomError.badRequest("Falta Imagen")
        if (!price) throw CustomError.badRequest("Falta Precio");
        if (!lastMaintenance) throw CustomError.badRequest("Falta ultimo mantenimiento");
        if (!nextMaintenance) throw CustomError.badRequest("Falta siguiente mantenimiento");

        return {
            id,
            name,
            description,
            stock,
            price,
            img,
            condition,
            lastMaintenance,
            nextMaintenance,
        };
    }

    public static toPersistence(entity: AssetsEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            stock: entity.stock,
            price: entity.price,
            img: entity.img,
            condition: entity.condition,
            lastMaintenance: entity.lastMaintenance,
            nextMaintenance: entity.nextMaintenance,
        };
    }
}