/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

function App() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data.map((movie) => (
          <div>
            <img src={getImage(movie.poster_path)} />
            <p>{movie.original_title}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
