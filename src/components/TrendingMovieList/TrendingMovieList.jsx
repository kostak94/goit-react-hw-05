import { useHttp } from "../../hooks/useHttp";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";

const TrendingMovieList = () => {
  const [films, , { loading, error }] = useHttp(fetchTrendingMovies);

  return <MovieList films={films} loading={loading} error={error} />;
};

export default TrendingMovieList;
