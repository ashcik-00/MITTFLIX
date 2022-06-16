import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form";

import { allTvShows } from "./services/movieAPI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Details from "./components/Details";
import WatchList from "./components/WatchList";

function App() {
  const [movies, setMovies] = useState([]);
  const [addToWatchList, setAddToWatchList] = useState(
    JSON.parse(localStorage.getItem(`watchList`)) || []
  );

  useEffect(() => {
    allTvShows().then((data) => {
      const d = data;
      setMovies(d);
    });
  }, [movies]);

  // const filteredAddToWatchList = (prevState, movies) => {
  //   const inWatchList = prevState.find((item) => item.id === movies.id);
  //   if (inWatchList) {
  //     setAddToWatchList(prevState.filter((item) => item.id !== movies.id));
  //   }
  // };

  // const handleToggleAddToWatchList = (id) => {
  //   setAddToWatchList((prevState) => {
  //     // console.log(typeof prevState);
  //     const movieIndex = prevState.findIndex((movieId) => movieId === id);
  //     if (movieIndex === -1) {
  //       return [...prevState, id];
  //     }
  //   });
  // };

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
                // handleToggleAddToWatchList={handleToggleAddToWatchList}
              />
            }
          />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search/:query" element={<Search />} />
          <Route
            path="/my-watch-list"
            element={
              <WatchList
                addToWatchList={addToWatchList}
                setAddToWatchList={setAddToWatchList}
                // filteredAddToWatchList={filteredAddToWatchList}
              />
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
