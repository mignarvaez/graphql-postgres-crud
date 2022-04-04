// Clase que contiene las queries para obtener los usuarios

// Se importa la entidad Users
import { GraphQLID, GraphQLList } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";

/** Retorna todos los usuarios */
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType), // Se indica que retornara una lista de usuarios. (Se debe instanciar la lista)
  async resolve() {
    return await Users.find(); // Busca todos los usuarios
  },
};

/** Retorna un usuario según su id */
export const GET_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    return await Users.findOneBy({ id: args.id });
  },
};
