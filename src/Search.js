import React from "react";
import { useForm } from "react-hook-form";
import "./search.scss";

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
    </div>
  );
};

export default Search;
