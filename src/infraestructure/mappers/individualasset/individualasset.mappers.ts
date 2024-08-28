import { IndividualAssetsEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class IndividualAssetsMapper {
    public static toDomain(object: any): IndividualAssetsEntity {
        const { name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets } = object;


        if (!name) throw CustomError.badRequest("Falta Nombre");
        if (!description) throw CustomError.badRequest("Falta Descripcion");
        if (!adquisitionDate) throw CustomError.badRequest("Falta Fecha de adquisicion");
        if (!state) throw CustomError.badRequest("Falta Estado");
        if (!condition) throw CustomError.badRequest("Falta Condicion");
        if (!img) throw CustomError.badRequest("Falta Imagen")
        if (!lastMaintenance) throw CustomError.badRequest("Falta Ultimo Mantenimiento")
        if (!nextMaintenance) throw CustomError.badRequest("Falta Siguiente Mantenimiento")
        if (!idAssets) throw CustomError.badRequest("Falta Referencia de bienes")

        return {
            name,
            description,
            adquisitionDate,
            state,
            condition,
            img,
            lastMaintenance,
            nextMaintenance,
            idAssets,
        };
    }

    public static toPersistence(entity: IndividualAssetsEntity): any {
        return {
            name: entity.name,
            description: entity.description,
            adquisitionDate: entity.adquisitionDate,
            state: entity.state,
            condition: entity.condition,
            img: entity.img,
            lastMaintenance: entity.lastMaintenance,
            nextMaintenance: entity.nextMaintenance,
            idAssets: entity.idAssets,
        };
    }
}