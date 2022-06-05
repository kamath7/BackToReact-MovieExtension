import React, { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(`You entered ${movie}`);
    setMovie("");
  };
  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        id="movie_name"
        name="movie_name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default Movie;
