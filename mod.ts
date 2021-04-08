import {Connection} from "./src/mod.ts";

console.log(await new Connection({
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'nuvem',
    port: 5432,
    entities: [],
    type: 'postgres'
}).driver.query(`SELECT * FROM usuarios`))
