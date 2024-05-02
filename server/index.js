import { ApolloServer} from "@apollo/server";
import { startStandaloneServer} from "@apollo/server/standalone";
import mergedResolvers from "./resolvers/resolvers.js";
import mergedTypeDefs from "./typeDefs/typeDef.js";

const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers
});

const { url } = await startStandaloneServer(server);
console.log(url);