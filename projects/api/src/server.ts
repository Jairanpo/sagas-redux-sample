import { ApolloServer } from "@apollo/server";
import lodash from "lodash";
import imagesResolver from "./features/images/images-resolver.js";
import loadSchemas from "./loadSchemas.js";
import {startStandaloneServer} from '@apollo/server/standalone'


async function createServer() {
  const rootSchema = `
    schema {
      query: Query
    }
  `;
  
  const schemas = await loadSchemas();

  return new ApolloServer({
    typeDefs: [rootSchema, ...schemas],
    resolvers: lodash.merge({}, imagesResolver),
  });
}

export async function start() {                                             
  const server = await createServer()  

  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
  })
  console.log(`🚀  Server ready at ${url}`)                                                       
}
