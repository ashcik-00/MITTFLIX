const Movie = ({ movie, toggleAddToWatchList }) => {
  const { id, title, overview, vote_average, poster_path } = movie;
  const handleClick = (event) => {
    toggleAddToWatchList(id);
  };
  return (
    <div className="movie">
      <a href="/details/60735">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="Movie poster"
        />
        <div className="overlay">
          <div className="title">{title}</div>
          <div className="rating">{vote_average}</div>
          <div className="plot">{overview}</div>
        </div>
      </a>
      <div data-toggled="true" className="listToggle">
        <div onClick={handleClick}>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default Movie;
