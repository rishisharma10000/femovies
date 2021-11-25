import React, { useState } from "react";
import { useMovieApi } from "./hooks";
import "./results.scss";
import MovieCard from "./MovieCard";
import ReactPaginate from "react-paginate";

const Results = () => {
  const [movies, isLoading, error] = useMovieApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const handleClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const lastmovie = currentPage * moviesPerPage;
  const firstmovie = lastmovie - moviesPerPage;
  const currentmovies = movies && movies.slice(firstmovie, lastmovie);

  return (
    <div className="results__container">
      <div className="results__header"></div>
      <div className="results__cardContainer">
        {movies &&
          currentmovies.map((movie, index) => (
            <div className="results__cardOuter" key={index}>
              {<MovieCard movie={movie} />}
            </div>
          ))}
      </div>
      <div className="results__pages">
        {currentmovies && (
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={Math.ceil(movies.length / moviesPerPage)}
            pageRangeDisplayed={Math.ceil(movies.length / moviesPerPage)}
            onPageChange={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Results;
