import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';
import { MovieApi } from './datasources';
import { BASE_URL, API_KEY } from './config';

const createServer = () => {
  const server = new ApolloServer({
    context: () => ({
      apiKey: API_KEY,
    }),
    typeDefs,
    resolvers,
    dataSources: () => ({
      movie: new MovieApi(),
    }),
  });

  return server;
};

export default createServer;
