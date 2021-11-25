import React from "react";
import "./movieCard.scss";
import Thumbnail from "./Thumbnail";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <div>
        <Thumbnail>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
            width="70px"
            height="70px"
            className="thumbnail__image"
          />
        </Thumbnail>
      </div>

      <div className="movieCard__textHeading">
        <span className="movieCard_textHeadingTitle">Name: </span>
        {movie.title}
      </div>
      <div className="movieCard__textHeading">
        <span className="movieCard_textHeadingTitle">Overview:</span>{" "}
        {movie.overview}{" "}
      </div>
      <div className="movieCard__textHeading">
        <span className="movieCard_textHeadingTitle">Rating:</span>{" "}
        {movie.vote_average}
      </div>
    </div>
  );
};

export default MovieCard;
