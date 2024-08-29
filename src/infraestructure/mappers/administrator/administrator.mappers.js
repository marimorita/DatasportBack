"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorMapper = void 0;
const domain_1 = require("../../../domain");
class AdministratorMapper {
    static toDomain(object) {
        const { id, name, lastName, email, phone, password, address, img, role, idCenter } = object;
        if (!id)
            throw domain_1.CustomError.badRequest("Falta Cedula");
        if (!name)
            throw domain_1.CustomError.badRequest("Falta Nombre");
        if (!lastName)
            throw domain_1.CustomError.badRequest("Falta Apellido");
        if (!email)
            throw domain_1.CustomError.badRequest("Falta Correo");
        if (!phone)
            throw domain_1.CustomError.badRequest("Falta Telefono");
        if (!password)
            throw domain_1.CustomError.badRequest("Falta Contraseña");
        if (!address)
            throw domain_1.CustomError.badRequest("Falta Direccion");
        if (!img)
            throw domain_1.CustomError.badRequest("Falta Imagen");
        if (!role)
            throw domain_1.CustomError.badRequest("Falta Rol");
        if (!idCenter)
            throw domain_1.CustomError.badRequest("Faltaid del Centro");
        return {
            id,
            name,
            lastName,
            email,
            phone,
            password,
            address,
            img,
            role,
            idCenter,
        };
    }
    static toPersistence(entity) {
        return {
            id: entity.id,
            name: entity.name,
            lastName: entity.lastName,
            email: entity.email,
            phone: entity.phone,
            password: entity.password,
            address: entity.address,
            img: entity.img,
            role: entity.role,
            idCenter: entity.idCenter,
        };
    }
}
exports.AdministratorMapper = AdministratorMapper;
