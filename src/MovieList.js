import React, { useContext, useState } from "react";
import { MovieContext } from "./Context";
import Movie from "./Movie";

const MovieList = (props) => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie, i) => (
        <Movie key={i} movieName={movie.movieName} />
      ))}
    </div>
  );
};

export default MovieList;
