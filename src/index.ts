// Se importa la configuración basica.
import app from "./app";
// Se importa la funcionalidad que permite la conexión a la base de datos.
import { connectDB } from "./db";
import {PORT} from './config'
// Se puede usar una función main para el llamado a los métodos y demás configuraciones necesarios para iniciar la aplicación

/** Función principal de la aplicación */
async function main() {
  try {
    await connectDB.initialize();
    app.listen(PORT);
    console.log("Servidor en el puerto",PORT);
  } catch (error) {
    console.error(error);
  }
}

main();
