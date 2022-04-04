// Archivo de configuracion

// Se importa el archivo para configurar varibles de entorno
import {config} from 'dotenv'

// Carga las variables de entorno que se encuentran en el archivo .env
config()

// Variables obtenidades desde las variables de entorno
export const PORT = process.env.PORT || 3000 // Si el puerto no está definido, utilice el 3000
export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_NAME = process.env.DB_NAME