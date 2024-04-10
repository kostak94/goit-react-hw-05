import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchReviewsByMovieId } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [film, , { loading, error }] = useHttp(fetchReviewsByMovieId, movieId);
  return (
    <div>
      {loading && "Loading..."}
      {error && "Something went wrong..."}
      {film?.total_results === 0 ? (
        <div>
          <h2>No reviews yet...</h2>
        </div>
      ) : (
        <ul>
          {film?.results.map((review) => {
            return (
              <li key={review.id}>
                <h2>{review.author}</h2>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
