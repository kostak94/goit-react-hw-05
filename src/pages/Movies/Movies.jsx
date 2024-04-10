import { useSearchParams } from "react-router-dom";
import QueryMovieList from "../../components/QueryMovieList /QueryMovieList";
import { useEffect, useState } from "react";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    setSearchParams({ query });
  };

  useEffect(() => {
    if (searchParams.get("query")) setQuery(searchParams.get("query"));
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Enter search query"
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      {searchParams.get("query") && (
        <QueryMovieList query={searchParams.get("query")} />
      )}
    </div>
  );
};

export default Movies;
