import { InvetoryEntity } from "../../../data";
import { CustomError } from "../../../domain";

export class InvetoryMapper {
    public static toDomain(object: any): InvetoryEntity {
        const { id, name, quantity, state, idCenter } = object;

        if (!id) {
            throw CustomError.badRequest("Missing id");
        }

        if (!name) throw CustomError.badRequest("Missing name");
        if (!quantity) throw CustomError.badRequest("Missing quantity");
        if (!state) throw CustomError.badRequest("Missing state")
        if (!idCenter) throw CustomError.badRequest("Missing idCenter");

        return {
            id,
            name,
            quantity,
            state,
            idCenter,
        };
    }

    public static toPersistence(entity: InvetoryEntity): any {
        return {
            id: entity.id,
            name: entity.name,
            quantity: entity.quantity,
            state: entity.state,
            idCenter: entity.idCenter,
        };
    }
}