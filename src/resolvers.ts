const resolvers = {
  Query: {
    popular: async (_: any, args: any, { dataSources }: any) =>
      dataSources.movie.getPopularMovies(args),
  },
};

export default resolvers;
