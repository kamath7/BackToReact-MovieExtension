import React, { useContext, useState } from "react";
import { MovieContext } from "./Context";

const MovieForm = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(
      `You entered ${movieName}. Current movie list -> ${JSON.stringify(
        movies
      )} `
    );
    setMovies([...movies, { movieName }]);
    setMovieName("");
  };
  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        id="movie_name"
        name="movie_name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default MovieForm;
