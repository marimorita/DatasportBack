"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').required().asPortNumber(),
    // MONGO_URL: get('MONGO_URL').required().asString(),
    // MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
    DB_HOST: (0, env_var_1.get)('DB_HOST').required().asString(),
    DB_PORT: (0, env_var_1.get)('DB_PORT').required().asPortNumber(),
    DB_USERNAME: (0, env_var_1.get)('DB_USERNAME').required().asString(),
    DB_PASSWORD: (0, env_var_1.get)('DB_PASSWORD').required().asString(),
    DB_DATABASE: (0, env_var_1.get)('DB_DATABASE').required().asString(),
    JWT_SECRET: (0, env_var_1.get)('JWT_SECRET').required().asString(),
    // GMAIL_USER: get('GMAIL_USER').required().asString(),
    // GMAIL_PASS: get('GMAIL_PASS').required().asString(),
};
