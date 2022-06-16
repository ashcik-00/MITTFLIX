import React from "react";
import MovieList from "./MovieList";

const Main = (props) => {
  const { movies, handleToggleAddToWatchList } = props;

  return (
    <>
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
    </>
  );
};

export default Main;
