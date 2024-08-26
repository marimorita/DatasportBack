import { DataSource } from "typeorm";
import { ClientsEntity } from "../entities/auth/clients/clients.entity";
import { EmployeesEntity } from "../entities/auth/employees/employees.entity";
import { AdministratorEntity } from "../entities/auth/administrator/administrator.entity";



export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: "",
    database: process.env.DB_DATABASE,
    synchronize: false, // Desactiva en producción
    logging: false,
    entities: [ClientsEntity,EmployeesEntity,AdministratorEntity], // Agrega todas tus entidades aquí
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
    .catch((error) => {
        console.log("Database MySql connection error");
        throw error;
    });