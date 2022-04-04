// Tipo de dato Graphql personalizado que representa un usuario

// Se importan funciones necesarias para crear tipo de dato personalizado
import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

// Objeto de tipo usuario
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID }, // GraphQLID indica que este campo es un id que puede ser number o string y que es unico
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});
