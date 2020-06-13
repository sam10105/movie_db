const resolvers = {
  Query: {
    popular: async (_: any, args: any, { dataSources }: any) =>
      dataSources.movie.getPopularMovies(args),
    topRated: async (_: any, args: any, { dataSources }: any) =>
      dataSources.movie.getTopRatedMovies(args),
    upcoming: async (_: any, args: any, { dataSources }: any) =>
      dataSources.movie.getUpcomingMovies(args),
  },
};

export default resolvers;
