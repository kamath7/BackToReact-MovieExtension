import React, { useContext, useState } from "react";
import { MovieContext } from "../context/Context";
import axios from "axios";
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

    let imdbRating = "0";
    let plot = "";
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${encodeURIComponent(
          movieName
        )}`
      )
      .then((res) => {
        imdbRating = res.data.Ratings[0].Value.split("/")[0]
          ? res.data.Ratings[0].Value.split("/")[0]
          : "NA";
        plot = res.data.Plot ? res.data.Plot : "LIPSUM";
        setMovies([...movies, { movieName, imdbRating, plot }]);
        setMovieName("");
      });
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
