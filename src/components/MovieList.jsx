import Movie from "./Movie";

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="titleList">
      <div className="title">
        <h1>Netflix</h1>
        <div className="titles-wrapper">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
