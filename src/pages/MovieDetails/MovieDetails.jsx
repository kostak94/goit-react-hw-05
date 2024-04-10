import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchMovieById } from "../../services/api";
import { getImageUrl, getReleaseDate } from "../../assets/helpers";
import { Suspense, useRef } from "react";

const MovieDetails = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from);
  const { movieId } = useParams();
  const [film] = useHttp(fetchMovieById, movieId);

  return (
    film && (
      <div>
        <Link to={goBackRef.current}>Go Back</Link>
        <div>
          <img src={getImageUrl(film.backdrop_path)} alt={film.title} />
          <h2>
            {film.title} ({getReleaseDate(film.release_date)})
          </h2>
          <p>User score: {Math.round(film.vote_average * 10)}%</p>
          <h2>Overview </h2>
          <p>{film.overview}</p>
          <h2>Genres</h2>
          <p>{film.genres.map(({ name }) => name).join(", ")}</p>
        </div>
        <ul>
          <li>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;
