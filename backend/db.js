import { createPool } from "mysql";
import { PORT } from "./config.js";

export const pool = createPool({
    host: "localhost", 
    user: "root",
    password: "",
    database:"mysql",
    port:  PORT,

})