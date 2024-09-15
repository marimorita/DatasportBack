"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstablishmentMapper = void 0;
const domain_1 = require("../../../domain");
class EstablishmentMapper {
    static toDomain(object) {
        const { id, name, email, phone, address } = object;
        if (!id) {
            throw domain_1.CustomError.badRequest("Missing id");
        }
        if (!name)
            throw domain_1.CustomError.badRequest("Missing name");
        if (!email)
            throw domain_1.CustomError.badRequest("Missing email");
        if (!phone)
            throw domain_1.CustomError.badRequest("Missing phone");
        if (!address)
            throw domain_1.CustomError.badRequest("Missing address");
        return {
            id,
            name,
            email,
            phone,
            address,
        };
    }
    static toPersistence(entity) {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            phone: entity.phone,
            address: entity.address,
        };
    }
}
exports.EstablishmentMapper = EstablishmentMapper;
