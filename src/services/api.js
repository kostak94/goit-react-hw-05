import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDgzMWJlNjkyMGRmZDgzODYyMmMwNzUwNzVmYzYxZCIsInN1YiI6IjY2MTUxMTE0NTQzN2Y1MDE2NDdlMmU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HmIr4T2mt1Y6lcSHeoFEGY1EVxAMAKdY1kvggZ3X6XE",
  },
};

export async function fetchTrendingMovies() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week",
    options
  );
  return response.data;
}

export async function fetchMovieById(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return response.data;
}

export async function fetchMovieByQuery(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    options
  );
  return response.data;
}

export async function fetchCastByMovieId(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits
`,
    options
  );
  return response.data;
}

export async function fetchReviewsByMovieId(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews
`,
    options
  );
  return response.data;
}
