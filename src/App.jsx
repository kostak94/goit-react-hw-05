import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const Movies = lazy(() => import("./pages/Movies/Movies.jsx"));
const MovieReviews = lazy(() =>
  import("./components/nestedComponents/MovieReviews.jsx")
);
const MovieCast = lazy(() =>
  import("./components/nestedComponents/MovieCast.jsx")
);
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails/MovieDetails.jsx")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
