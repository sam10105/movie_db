import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { BASE_URL } from '../config';
import { Movie } from '../types/movie';

class MovieApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }

  willSendRequest(req: RequestOptions) {
    req.params.set('api_key', this.context.apiKey);
  }

  async getPopularMovies(args: any) {
    const { results } = await this.get('/movie/popular', args);

    return Array.isArray(results)
      ? results.map(movie => this.movieReducer(movie))
      : [];
  }

  movieReducer(movie: Movie) {
    return {
      posterPath: movie.poster_path,
      adult: movie.adult,
      overview: movie.overview,
      releaseDate: movie.release_date,
      genreIds: movie.genre_ids,
      id: movie.id,
      originalTitle: movie.original_title,
      originalLanguage: movie.original_language,
      title: movie.title,
      backdropPath: movie.backdrop_path,
      popularity: movie.popularity,
      voteCount: movie.vote_count,
      video: movie.video,
      voteAverage: movie.vote_average,
    };
  }
}

export default MovieApi;
