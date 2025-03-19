import pg from "pg";
// import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";


export const pool = new pg.Pool({
    user: 'daniel',
    host: 'localhost',
    password: '123777',
    database: 'hola',
    port: '5432',
});
