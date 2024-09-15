"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsMapper = void 0;
const domain_1 = require("../../../domain");
class AssetsMapper {
    static toDomain(object) {
        const { id, name, description, img, stock } = object;
        if (!name)
            throw domain_1.CustomError.badRequest("Falta Nombre");
        if (!description)
            throw domain_1.CustomError.badRequest("Falta Descripcion");
        if (!img)
            throw domain_1.CustomError.badRequest("Falta Imagen");
        if (!stock)
            throw domain_1.CustomError.badRequest("Falta Cantidad");
        return {
            id,
            name,
            description,
            img,
            stock,
        };
    }
    static toPersistence(entity) {
        return {
            id: entity.id,
            name: entity.name,
            description: entity.description,
            img: entity.img,
            stock: entity.stock,
        };
    }
}
exports.AssetsMapper = AssetsMapper;
