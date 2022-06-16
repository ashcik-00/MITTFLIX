import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import { searchMovies, allTvShows } from "./services/movieAPI";

function App() {
  const [movies, setMovies] = useState([]);
  const [addToWatchList, setAddToWatchList] = useState([]);

  useEffect(() => {
    allTvShows().then((data) => {
      const d = data;
      setMovies(d);
    });
  }, [movies]);

  const handleToggleAddToWatchList = (id) => {
    setAddToWatchList((prevState) => {
      console.log(typeof prevState);
      const movieIndex = prevState.findIndex((movieId) => movieId === id);
      if (movieIndex === -1) {
        return [...prevState, id];
      }
    });
  };

  return (
    <React.Fragment>
      <div id="root">
        <Header>
          <Form />
        </Header>
        <MovieList
          title="Netflix"
          movies={movies[0]?.results}
          toggleAddToWatchList={handleToggleAddToWatchList}
        />
        <MovieList
          title="Crave"
          movies={movies[1]?.results}
          toggleAddToWatchList={handleToggleAddToWatchList}
        />
        <MovieList
          title="Disney"
          movies={movies[2]?.results}
          toggleAddToWatchList={handleToggleAddToWatchList}
        />
        <MovieList
          title="ApplePlus"
          movies={movies[3]?.results}
          toggleAddToWatchList={handleToggleAddToWatchList}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
