import { useHttp } from "../../hooks/useHttp";
import { fetchMovieByQuery } from "../../services/api";
import MovieList from "../MovieList/MovieList";

const QueryMovieList = ({ query }) => {
  const [films, , { loading, error }] = useHttp(fetchMovieByQuery, query);
  if (!loading && !error && films?.results.length === 0) {
    return <h1>Nothing was found for {query}</h1>;
  }
  return <MovieList films={films} loading={loading} error={error} />;
};

export default QueryMovieList;
