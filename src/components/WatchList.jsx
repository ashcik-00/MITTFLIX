import React from "react";

import MovieList from "./MovieList";

const WatchList = ({ handleWatchList, watchListData }) => {
  return (
    <>
      <MovieList
        name=" Watch List"
        toggleAddToWatchList={handleWatchList}
        movies={watchListData}
      />
    </>
  );
};

export default WatchList;
