// Clase que representa un mensaje que se envia cuando se actualiza un usuario

import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

/** Mensaje de respuesta al actualizar un usuario */
export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: {
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  },
});
