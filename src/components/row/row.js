import React, { useState, useEffect } from "react";
import axios from "axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // A snippet of code wich runs based on a specific conditions
  useEffect(() => {
    // If [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
