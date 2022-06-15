import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import searchMovies from "./services/movieAPI";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("the flash").then((movie) => setMovies(movie));
  }, []);
  return (
    <React.Fragment>
      <div id="root">
        <Header>
          <Form />
        </Header>
        <MovieList movies={movies} />
      </div>
    </React.Fragment>
  );
}

export default App;
