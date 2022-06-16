import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import { searchMovies, allTvShows } from "./services/movieAPI";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Details from "./components/Details";

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
      <Router>
        <Header>
          <Form />
        </Header>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                movies={movies}
                handleToggleAddToWatchList={handleToggleAddToWatchList}
              />
            }
          />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search/:query" element={<Search />} />
          {/* <Route path="/watchlist" element={<WatchList />} /> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
