
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/schema.graphql');



const resolvers = {
  Query: {
   saludo: (root, args) => `Hola ${args.name}`,
   despedida: (root, args) => 8787,

  },
  Mutation: {
      persona: (root, {data}) => ({nombre: data.nombre, edad: data.edad})
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))