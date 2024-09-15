"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualAssetsMapper = void 0;
const domain_1 = require("../../../domain");
class IndividualAssetsMapper {
    static toDomain(object) {
        const { name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets } = object;
        if (!name)
            throw domain_1.CustomError.badRequest("Falta Nombre");
        if (!description)
            throw domain_1.CustomError.badRequest("Falta Descripcion");
        if (!adquisitionDate)
            throw domain_1.CustomError.badRequest("Falta Fecha de adquisicion");
        if (!state)
            throw domain_1.CustomError.badRequest("Falta Estado");
        if (!condition)
            throw domain_1.CustomError.badRequest("Falta Condicion");
        if (!img)
            throw domain_1.CustomError.badRequest("Falta Imagen");
        if (!lastMaintenance)
            throw domain_1.CustomError.badRequest("Falta Ultimo Mantenimiento");
        if (!nextMaintenance)
            throw domain_1.CustomError.badRequest("Falta Siguiente Mantenimiento");
        if (!idAssets)
            throw domain_1.CustomError.badRequest("Falta Referencia de bienes");
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
    static toPersistence(entity) {
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
exports.IndividualAssetsMapper = IndividualAssetsMapper;
