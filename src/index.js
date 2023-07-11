import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      average: Float
      married: Boolean!
      strings: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '1',
      name: () => 'Vinicio Deivid Brejinski',
      age: () => 1,
      average: () => 8.9,
      married: () => true,
      strings: () => ['a', 'n'],
    },
  },
});

const port = 4003;

server.listen(port).then(() => {
  console.log(`Server is runing on http://localhost:${port}`);
});
