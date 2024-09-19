"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const clients_entity_1 = require("../entities/auth/clients/clients.entity");
const employees_entity_1 = require("../entities/auth/employees/employees.entity");
const administrator_entity_1 = require("../entities/auth/administrator/administrator.entity");
const assets_entity_1 = require("../entities/auth/assets/assets.entity");
const individualasset_entity_1 = require("../entities/auth/individualasset/individualasset.entity");
const products_entity_1 = require("../entities/auth/products/products.entity");
const config_1 = require("../../config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: config_1.envs.DB_HOST,
    port: config_1.envs.DB_PORT,
    username: config_1.envs.DB_USERNAME,
    password: config_1.envs.DB_PASSWORD,
    database: config_1.envs.DB_DATABASE,
    synchronize: false, // Desactiva en producción
    logging: false,
    entities: [clients_entity_1.ClientsEntity, employees_entity_1.EmployeesEntity, administrator_entity_1.AdministratorEntity, assets_entity_1.AssetsEntity, individualasset_entity_1.IndividualAssetsEntity, products_entity_1.ProductsEntity], // Agrega todas tus entidades aquí
    migrations: [],
    subscribers: [],
    extra: {
        connectionLimit: 10,
        connectTimeout: 60000,
    },
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Database MySql connected");
})
    .catch((error) => {
    console.log("Database MySql connection error");
    throw error;
});
