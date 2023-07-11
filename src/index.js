import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = 4003;

server.listen(port).then(() => {
  console.log(`Server is runing on http://localhost:${port}`);
});
