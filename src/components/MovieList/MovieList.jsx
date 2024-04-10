import { Link, useLocation } from "react-router-dom";

const MovieList = ({ films, loading, error }) => {
  const location = useLocation();

  return (
    <div>
      {loading && "Loading..."}
      {error && "Something went wrong"}
      {Boolean(films) && films.length !== 0 && (
        <ul>
          {films?.results.map((film) => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
