import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    posterPath: String
    adult: Boolean
    overview: String
    releaseDate: String
    genreIds: [Int]
    id: ID!
    originalTitle: String
    originalLanguage: String
    title: String
    backdropPath: String
    popularity: Float
    voteCount: Int
    video: Boolean
    voteAverage: Float
  }

  type Query {
    """
    Get a list of the current popular movies on TMDb. This list updates daily.
    """
    popular(
      """
      Pass a ISO 639-1 value to display translated data for the fields that support it.
      """
      language: String
      """
      Specify which page to query.
      """
      page: Int
      """
      Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
      """
      region: String
    ): [Movie]!
  }
`;

export default typeDefs;
