import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "./row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // A snippet of code wich runs based on a specific conditions
  useEffect(() => {
    // If [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* Several row_poster(s) */}{" "}
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
