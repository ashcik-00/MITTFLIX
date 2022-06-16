import Movie from "./Movie";

const MovieList = ({ title, movies, toggleAddToWatchList }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{title}</h1>
        <div className="titles-wrapper">
          {movies?.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              toggleAddToWatchList={toggleAddToWatchList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
