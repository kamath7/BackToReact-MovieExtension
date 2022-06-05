import React from "react";

const Movie = (props) => {
  return (
    <div>
      <p>
        {props.movieName} - {props.imdbRating} - {props.plot}
      </p>
    </div>
  );
};

export default Movie;
