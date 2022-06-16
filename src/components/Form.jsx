import { useState } from "react";

const Form = () => {
  const [searchResult, setSearchResult] = useState("");

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `http://localhost:3000/search/${searchResult}`;
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
