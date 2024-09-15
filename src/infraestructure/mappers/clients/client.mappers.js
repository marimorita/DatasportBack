"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMapper = void 0;
const domain_1 = require("../../../domain");
class ClientMapper {
    static toDomain(object) {
        const { id, name, lastName, email, address, phone, idCenter, state, img } = object;
        if (!id) {
            throw domain_1.CustomError.badRequest("Falta id");
        }
        if (!name)
            throw domain_1.CustomError.badRequest("Falta");
        if (!lastName)
            throw domain_1.CustomError.badRequest("Falta Apellido");
        if (!email)
            throw domain_1.CustomError.badRequest("Falta Correo");
        if (!address)
            throw domain_1.CustomError.badRequest("Falta direccion");
        if (!phone)
            throw domain_1.CustomError.badRequest("Falta Telefono");
        // if (!assistance) throw CustomError.badRequest("Falta Asistencia");
        // if (!img) throw CustomError.badRequest("Falta Imagen");
        if (!idCenter)
            throw domain_1.CustomError.badRequest("Falta id de Centro");
        if (!state)
            throw domain_1.CustomError.badRequest("Falta Estado");
        return {
            id,
            name,
            lastName,
            email,
            address,
            phone,
            // assistance,
            idCenter,
            state,
            img,
        };
    }
    static toPersistence(entity) {
        return {
            id: entity.id,
            name: entity.name,
            lastName: entity.lastName,
            email: entity.email,
            address: entity.address,
            phone: entity.phone,
            // assistance: entity.assistance,
            idCenter: entity.idCenter,
            state: entity.state,
            img: entity.img,
        };
    }
}
exports.ClientMapper = ClientMapper;
