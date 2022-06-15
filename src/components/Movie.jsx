const Movie = ({ movie }) => {
  const { title, overview, vote_average, poster_path } = movie;
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
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default Movie;
