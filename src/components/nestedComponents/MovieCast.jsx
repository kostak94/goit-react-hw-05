import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchCastByMovieId } from "../../services/api";
import { getImageUrl } from "../../assets/helpers";

const MovieCast = () => {
  const { movieId } = useParams();
  const [film, , { loading, error }] = useHttp(fetchCastByMovieId, movieId);
  return (
    <div>
      {loading && "Loading..."}
      {error && "Something went wrong..."}
      {film?.cast.length === 0 ? (
        <div>
          <p>Not available</p>
        </div>
      ) : (
        <ul>
          {film?.cast.map((actor) => {
            return (
              <li key={actor.id}>
                <img src={getImageUrl(actor.profile_path)} alt="" />
                <h2> {actor.name}</h2>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
