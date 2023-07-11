import { gql } from 'apollo-server';

const rootTypeDegs = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'hi',
  },
};

export const typeDefs = [rootTypeDegs];
export const resolvers = [rootResolvers];
