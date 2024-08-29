"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvetoryMapper = void 0;
const domain_1 = require("../../../domain");
class InvetoryMapper {
    static toDomain(object) {
        const { id, name, quantity, state, idCenter } = object;
        if (!id) {
            throw domain_1.CustomError.badRequest("Missing id");
        }
        if (!name)
            throw domain_1.CustomError.badRequest("Missing name");
        if (!quantity)
            throw domain_1.CustomError.badRequest("Missing quantity");
        if (!state)
            throw domain_1.CustomError.badRequest("Missing state");
        if (!idCenter)
            throw domain_1.CustomError.badRequest("Missing idCenter");
        return {
            id,
            name,
            quantity,
            state,
            idCenter,
        };
    }
    static toPersistence(entity) {
        return {
            id: entity.id,
            name: entity.name,
            quantity: entity.quantity,
            state: entity.state,
            idCenter: entity.idCenter,
        };
    }
}
exports.InvetoryMapper = InvetoryMapper;
