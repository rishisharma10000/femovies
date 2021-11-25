import { useEffect, useState } from "react";

export const useMovieApi = (data) => {
  console.log("HELLO", data);
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TOKEN}&query=${data}`
    )
      .then((res) => res.json())
      .then((movies) => setMovies(movies.results))
      .catch((err) => setIsError(true))
      .finally((loading) => setIsLoading(false));
  }, []);
  return [movies, isLoading, error];
};
