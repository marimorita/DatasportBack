import { DataSource } from "typeorm";
import { ClientsEntity } from "../entities/auth/clients/clients.entity";
import { EmployeesEntity } from "../entities/auth/employees/employees.entity";
import { AdministratorEntity } from "../entities/auth/administrator/administrator.entity";
import { AssetsEntity } from "../entities/auth/assets/assets.entity";
import { IndividualAssetsEntity } from "../entities/auth/individualasset/individualasset.entity";
import { envs } from "../../config";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    username: envs.DB_USERNAME,
    password: "",
    database: envs.DB_DATABASE,
    synchronize: false, // Desactiva en producción
    logging: false,
    entities: [ClientsEntity,EmployeesEntity,AdministratorEntity,AssetsEntity,IndividualAssetsEntity], // Agrega todas tus entidades aquí
    migrations: [],
    subscribers: [],
    extra: {
        connectionLimit: 10,
        connectTimeout: 60000,
    },
})  


AppDataSource.initialize()
    .then(() => {
        console.log("Database MySql connected");
    })
    .catch((error: any) => {
        console.log("Database MySql connection error");
        throw error;
    });