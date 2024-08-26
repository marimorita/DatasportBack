import { EmployeesEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class EmployeesMapper {
    public static toDomain(object: any): EmployeesEntity {
        const { id, name, lastName, email, phone, password, address, img, role, idCenter, state } = object;

        if (!id) throw CustomError.badRequest("Falta Cedula");
        if (!name) throw CustomError.badRequest("Falta Nombre");
        if (!lastName) throw CustomError.badRequest("Falta Apellido");
        if (!email) throw CustomError.badRequest("Falta Correo");
        if (!phone) throw CustomError.badRequest("Falta Telefono");
        if (!password) throw CustomError.badRequest("Falta Contraseña");
        if (!address) throw CustomError.badRequest("Falta Direccion");
        if (!img) throw CustomError.badRequest("Falta Imagen");
        if (!role) throw CustomError.badRequest("Falta Rol");
        if (!idCenter) throw CustomError.badRequest("Falta id del Centro");
        if (!state) throw CustomError.badRequest("Falta Estado");

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
            state,
            idCenter,
        };
    }

    public static toPersistence(entity: EmployeesEntity): any {
        return {
            id: entity.id,
            name: entity.name,
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