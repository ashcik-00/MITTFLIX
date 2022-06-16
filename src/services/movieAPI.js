const API_Key = "79acc0cb1a78284302956c4780a4a425";

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}`;

export const searchMovies = async (query) => {
  const request = await fetch(`${SEARCH_URL}&query=${query}`);
  const response = await request.json();
  const movies = await response.results;
  return movies;
};

const ALLNetflixTvShows_URL = fetch(
  `https://api.themoviedb.org/3/discover/tv?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2Winnipeg&include_null_first_air_dates=false&with_watch_providers=8&watch_region=CA`
);
const ALLCraveTvShows_URL = fetch(
  `https://api.themoviedb.org/3/discover/tv?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2Winnipeg&include_null_first_air_dates=false&with_watch_providers=230&watch_region=CA`
);
const ALLDisneyTvShows_URL = fetch(
  `https://api.themoviedb.org/3/discover/tv?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2Winnipeg&include_null_first_air_dates=false&with_watch_providers=337&watch_region=CA`
);
const ALLApplePlusTvShows_URL = fetch(
  `https://api.themoviedb.org/3/discover/tv?api_key=${API_Key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2Winnipeg&include_null_first_air_dates=false&with_watch_providers=350&watch_region=CA`
);

export const allTvShows = () => {
  return Promise.all([
    ALLNetflixTvShows_URL,
    ALLCraveTvShows_URL,
    ALLDisneyTvShows_URL,
    ALLApplePlusTvShows_URL,
  ])
    .then((responses) => {
      return Promise.all(responses.map((response) => response.clone().json()));
    })
    .catch((err) => console.log(err));
};

export const showDetails = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_Key}`
  );
  const result = response.json();
  return result;
};
