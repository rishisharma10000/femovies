import React from "react";
import Search from "./Search";
import { useMovieApi } from "./hooks";
import Results from "./Results";

const Homepage = () => {
  const [movies, isLoading, error] = useMovieApi();
  console.log("MOVIES", movies);
  return (
    <div>
      <Search />
      {movies && <Results movies={movies} />}
    </div>
  );
};

export default Homepage;
