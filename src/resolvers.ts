const resolvers = {
  Query: {
    popular: async (_: any, args: any, { dataSources }: any) =>
      dataSources.movie.getPopularMovies(args),
    topRated: async (_: any, args: any, { dataSources }: any) =>
      dataSources.movie.getTopRatedMovies(args),
  },
};

export default resolvers;
