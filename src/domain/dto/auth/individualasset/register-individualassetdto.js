"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImgIndividualAssetsDto = exports.UpdateDescriptionIndividualAssetsDto = exports.UpdateNameIndividualAssetsDto = exports.RegisterIndividualAssetsDto = void 0;
const config_1 = require("../../../../config");
class RegisterIndividualAssetsDto {
    constructor(name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets) {
        this.name = name;
        this.description = description;
        this.adquisitionDate = adquisitionDate;
        this.state = state;
        this.condition = condition;
        this.img = img;
        this.lastMaintenance = lastMaintenance;
        this.nextMaintenance = nextMaintenance;
        this.idAssets = idAssets;
    }
    static create(object) {
        const { name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets } = object;
        if (!name)
            return ['Falta Nombre'];
        if (!description)
            return ['Falta description'];
        if (!lastMaintenance)
            return ['Falta Fecha de adquisicion'];
        if (!config_1.Validators.date.test(lastMaintenance))
            return ['Fecha de adquisicion no valido'];
        if (!state)
            return ['Falta Estado'];
        if (!config_1.Validators.text.test(state))
            return ['Estado no valido'];
        if (!condition)
            return ['Falta Estado'];
        if (!config_1.Validators.text.test(condition))
            return ['Condicion no valida'];
        if (!lastMaintenance)
            return ['Falta Ultimo Mantenimiento'];
        if (!config_1.Validators.date.test(lastMaintenance))
            return ['Ultimo Mantenimiento no valido'];
        if (!nextMaintenance)
            return ['Falta Siguiente Mantenimiento'];
        if (!config_1.Validators.date.test(nextMaintenance))
            return ['Siguiente Mantenimiento no valido'];
        if (!idAssets)
            return ['Falta Referencia de bienes'];
        if (!config_1.Validators.number.test(idAssets))
            return ['Referencia de bienes no valida'];
        return [
            undefined,
            new RegisterIndividualAssetsDto(name, description, adquisitionDate, state, condition, img, lastMaintenance, nextMaintenance, idAssets)
        ];
    }
}
exports.RegisterIndividualAssetsDto = RegisterIndividualAssetsDto;
class UpdateNameIndividualAssetsDto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static create(object) {
        const { id, name } = object;
        return [
            undefined,
            new UpdateNameIndividualAssetsDto(id, name)
        ];
    }
}
exports.UpdateNameIndividualAssetsDto = UpdateNameIndividualAssetsDto;
class UpdateDescriptionIndividualAssetsDto {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
    static create(object) {
        const { id, description } = object;
        return [
            undefined,
            new UpdateDescriptionIndividualAssetsDto(id, description)
        ];
    }
}
exports.UpdateDescriptionIndividualAssetsDto = UpdateDescriptionIndividualAssetsDto;
class UpdateImgIndividualAssetsDto {
    constructor(id, img) {
        this.id = id;
        this.img = img;
    }
    static create(object) {
        const { id, img } = object;
        return [
            undefined,
            new UpdateImgIndividualAssetsDto(id, img)
        ];
    }
}
exports.UpdateImgIndividualAssetsDto = UpdateImgIndividualAssetsDto;
