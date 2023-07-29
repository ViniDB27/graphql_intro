import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

const port = 4004;

server.listen(port).then(() => {
  console.log(`Server is runing on http://localhost:${port}`);
});
