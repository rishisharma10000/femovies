import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMovieApi } from "./hooks";
import Results from "./Results";
import "./search.scss";

const Search = () => {
  const [submit, setSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setSubmit(true);

  const onClear = (data) => setSubmit(false);

  return (
    <div className="search">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="search-item">
          <p>Please search for a film</p>
        </div>
        <div className="search-item">
          <input {...register("movie", { required: true })} />
          {errors.movie?.type === "required" &&
            "You must enter something in the field"}
        </div>
        <div className="search-item">
          <input type="submit" />
        </div>
      </form>
      <form onSubmit={handleSubmit(onClear)}>
        <div className="search-item">
          <button type="submit">Clear</button>
        </div>
      </form>
      {submit && <Results />}
    </div>
  );
};

export default Search;
