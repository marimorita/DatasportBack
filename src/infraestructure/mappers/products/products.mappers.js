"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsMapper = void 0;
const domain_1 = require("../../../domain");
class ProductsMapper {
    static toDomain(object) {
        const { name, description, state, stock, img, price, idCenter } = object;
        if (!name)
            throw domain_1.CustomError.badRequest("Falta Nombre");
        if (!description)
            throw domain_1.CustomError.badRequest("Falta Descripcion");
        if (!state)
            throw domain_1.CustomError.badRequest("Falta Estado");
        if (!stock)
            throw domain_1.CustomError.badRequest("Falta Cantidad");
        if (!img)
            throw domain_1.CustomError.badRequest("Falta Imagen");
        if (!price)
            throw domain_1.CustomError.badRequest("Falta Precio");
        if (!idCenter)
            throw domain_1.CustomError.badRequest("Falta el id del Center");
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
    static toPersistence(entity) {
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
exports.ProductsMapper = ProductsMapper;
