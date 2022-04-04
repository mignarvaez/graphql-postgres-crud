// Se importa DataSource para la conexión a postgresql
import { DataSource } from "typeorm";

// Se importa las entidades
import { Users } from "./Entities/Users";

// Se importa el archivo de configuracion de variables de entorno
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from "./config"

// Se exporta el objeto que define la conexión a la base de datos
export const connectDB = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT), // Convierte el puerto que viene como string en numero
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Users],
  synchronize: true,
  ssl: true,
});
