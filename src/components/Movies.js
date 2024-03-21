import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie, index)=>{
    return(
      <div key={index}>
        <h2>Movie Title: {movie.title}</h2>
        <p>Movie Duration: {movie.time} minutes</p>

        Genres:
        <ul>
          {movie.genres.map((genre, index)=>{
            return(
              <li key={index}>{genre}</li>
            )
          })}
        </ul>
      </div>
    )
  })
  return (<div>
    <h1>Movies Page</h1>
    {movieList}
  </div>);
}

export default Movies;
