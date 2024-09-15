"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterInvetoryDto = void 0;
class RegisterInvetoryDto {
    constructor(name, quantity, state, idCenter) {
        this.name = name;
        this.quantity = quantity;
        this.state = state;
        this.idCenter = idCenter;
    }
    static create(object) {
        const { name, quantity, state, idCenter } = object;
        if (!name)
            return ['Missing name'];
        if (!quantity)
            return ['Missing quantity'];
        if (!state)
            return ['Missing state'];
        if (!idCenter)
            return ['Missing idCenter'];
        return [
            undefined,
            new RegisterInvetoryDto(name, quantity, state, idCenter)
        ];
    }
}
exports.RegisterInvetoryDto = RegisterInvetoryDto;
