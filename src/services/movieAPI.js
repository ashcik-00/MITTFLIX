// import API_Key from "../api-key";
const API_Key = "79acc0cb1a78284302956c4780a4a425";

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}`;

const searchMovies = async (query) => {
  const request = await fetch(`${SEARCH_URL}&query=${query}`);
  const response = await request.json();
  const movies = await response.results;
  return movies;
};

export default searchMovies;
