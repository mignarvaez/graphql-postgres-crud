// Este archivo contiene la configuración básica

// Los módulos base instalados (producción):
// express express-graphql graphql pg typeorm cors bcryptjs
// Módulos desarrollo instalados
// npm i -D typescript ts-node-dev @types/bcryptjs @types/cors @types/express  @types/node dotenv

// Crear archivo de configuracion para typescript
// npx tsc --init

// Script desarrollo (que vigile el index.ts)
//  "dev": "ts-node-dev src/index.ts",

// Script convertir a producción
// "build": "tsc -p ."

// Mutacion crear usuario
/**
  mutation {
  createUser(name: "Angel", username: "Angel", password: "prueba") <- Crea el usuario {
    id
    name
    username
    password
  } <- indica que campo queremo que retorne
}

 */

// Se importan los modulos necesarios como express y la función
// graphqlHTTP
import express from "express";
import { graphqlHTTP } from "express-graphql";

// Se importa el esquema creado
import { schema } from "./schema";

/**
 * Se inicializa la constante que correra express
 * y se configura
 */
const app = express();

// Se configura graphql indicando una interfaz para la ruta
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

export default app;
