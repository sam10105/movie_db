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
    """
    Get the top rated movies on TMDb.
    """
    topRated(
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
    """
    Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.

    You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
    """
    upcoming(
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
