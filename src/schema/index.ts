/** El esquema que define como se interactuara con graphql */

// Se importa los objetos que ayudaran a configurar el schema
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_USERS, GET_USER } from "./Queries/User";

/** Consulta principal */
const RootQuery = new GraphQLObjectType({
  name: "RootQuery", // El nombre del objeto
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
  }, // Los fields son las funciones que puedes consultar y lo que retornaran
});

/** Mutación principal */
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
  },
});

/**  Un esquema necesita definir un query que son las consultas y mutaciones
 que son como funciones que alteran datos */
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
