import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      username: String
    }
  `,
  resolvers: {
    Query: {
      user: () => ({
        id: '154855',
        username: 'viniciosdb',
      }),
      users: () => [
        {
          id: '154855',
          username: 'viniciosdb',
        },
      ],
    },
  },
});

const port = 4003;

server.listen(port).then(() => {
  console.log(`Server is runing on http://localhost:${port}`);
});
