import { useState } from "react";

const Form = ({ searchMovies }) => {
  const [searchResult, setSearchResult] = useState("");

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(searchResult);
    setSearchResult("");
  };

  return (
    <form onSubmit={handleSubmit} id="search" className="search">
      <input
        onChange={handleChange}
        type="search"
        placeholder="Search for a title..."
        value={searchResult}
      />
      <div className="searchResults"></div>
    </form>
  );
};

export default Form;
