import { EstablishmentEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class EstablishmentMapper {
    public static toDomain(object: any): EstablishmentEntity {
        const { id, name, email, phone, address } = object;

        if (!id) {
            throw CustomError.badRequest("Missing id");
        }

        if (!name) throw CustomError.badRequest("Missing name");
        if (!email) throw CustomError.badRequest("Missing email");
        if (!phone) throw CustomError.badRequest("Missing phone")
        if (!address) throw CustomError.badRequest("Missing address");

        return {
            id,
            name,
            email,
            phone,
            address,
        };
    }

    public static toPersistence(entity: EstablishmentEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            phone: entity.phone,
            address: entity.address,
        };
    }
}