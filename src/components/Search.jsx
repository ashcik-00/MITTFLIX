import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import { searchMovies } from "../services/movieAPI";

const Search = (props) => {
  const { toggleAddToWatchList } = props;

  const [movies, setMovies] = useState();

  const { query } = useParams();

  useEffect(() => {
    searchMovies(query)
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MovieList
      title="Results"
      movies={movies}
      toggleAddToWatchList={toggleAddToWatchList}
    />
  );
};

export default Search;
