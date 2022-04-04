// Clase que contiene las mutaciones para la entidad usuario

import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";
// Se importa la entidad usuarios
import { Users } from "../../Entities/Users";
// Se importa el tipo de dato usuarios
import { UserType } from "../TypeDefs/User";
// Modulo para encriptar password
import bcrypt from "bcryptjs";
import { MessageType } from "../TypeDefs/Message";

/** Mutación para crear un usuario */
export const CREATE_USER = {
  type: UserType, // Retorna un objeto personalizado de tipo user
  args: {
    // Argumentos o parametros a pasar para crear el usuario
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    // Resolve recibe dos parametros, el parent (se pasa con linea bajo para omitir) (usado cuando se trabaja con relaciones entre esquemas y los argumentos)

    // Se traen los valores de los parametros
    const { name, username, password } = args;

    // Se encripta la contraseña
    const encryptPassword = await bcrypt.hash(password, 10);

    // Se realiza la inserción de los mismos
    const result = await Users.insert({
      name: name,
      username: username,
      password: encryptPassword,
    });

    console.log(result);

    // Retorna el nombre, el username y el password desde los argumentos para que use estos campos como parte de la entidad
    // Esto usando el operador spread.
    // El id se lo trae desde result.identifiers[0].id
    // El password que retornara al crearse sera el encriptado
    return { ...args, id: result.identifiers[0].id, password: encryptPassword };
  },
};

/** Elimina un usuario según su id */
export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }: any) {
    const result = await Users.delete(id);

    if (result.affected == 1) return true;

    return false;
  },
};

/** Actualiza un usuario */
export const UPDATE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    input: {
      type: new GraphQLInputObjectType({
        name: "UserInput",
        fields: {
          name: { type: GraphQLString },
          username: { type: GraphQLString },
          oldPassword: { type: GraphQLString }, // El password viejo para autenticar
          newPassword: { type: GraphQLString }, // El password nuevo para actualizar
        },
      }),
    }, // Tipo que representa los datos del usuario a actualizar
  },
  async resolve(_: any, { id, input }: any) {
    const userFound = await Users.findOneBy({ id: id }); // Busca el usuario

    if (!userFound)
      return {
        success: false,
        message: "Usuario no encontrado",
      };

    const isMatch = await bcrypt.compare(
      input.oldPassword,
      userFound!.password
    ); // Valida que la contraseña ingresada coincida con la del usuario buscado

    if (!isMatch)
      return {
        success: false,
        message: "Contraseña incorrecta",
      }; // Si las contraseñas no coinciden retorna false

    const newPasswordHash = await bcrypt.hash(input.newPassword, 10);
    const response = await Users.update(
      { id },
      { name: input.name, username: input.username, password: newPasswordHash }
    ); // Realiza la actualización por ID de los demás campos

    if (response.affected == 0) return false; // retorna falso si no encuentra un usuario según id suministrado
    return {
      success: true,
      message: "Usuario actualizado satisfactoriamente",
    };
  },
};
