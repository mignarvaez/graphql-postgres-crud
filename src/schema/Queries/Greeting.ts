// Tipo de dato tring para graphql
import { GraphQLString } from "graphql"
/** Objeto que indica a graphql que nombre va a tener, que argumentos recibe y que devuelve. */ 

export const GREETING ={
    type: GraphQLString,
    resolve: () => 'Hola mundo'
}