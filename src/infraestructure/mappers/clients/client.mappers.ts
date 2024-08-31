import { ClientsEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class ClientMapper {
    public static toDomain(object: any): ClientsEntity {
        const { id, name, lastName, email, address, phone, idCenter, state, img } = object;

        if (!id) {
            throw CustomError.badRequest("Falta id");
        }

        if (!name) throw CustomError.badRequest("Falta");
        if (!lastName) throw CustomError.badRequest("Falta Apellido");
        if (!email) throw CustomError.badRequest("Falta Correo");
        if (!address) throw CustomError.badRequest("Falta direccion");
        if (!phone) throw CustomError.badRequest("Falta Telefono");
        // if (!assistance) throw CustomError.badRequest("Falta Asistencia");
        // if (!img) throw CustomError.badRequest("Falta Imagen");
        if (!idCenter) throw CustomError.badRequest("Falta id de Centro");
        if (!state) throw CustomError.badRequest("Falta Estado");

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

    public static toPersistence(entity: ClientsEntity): any {
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