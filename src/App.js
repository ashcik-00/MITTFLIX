import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form";
import MovieList from "./components/MovieList";

function App() {
  return (
    <React.Fragment>
      <div id="root">
        <Header>
          <Form />
        </Header>
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
      </div>
    </React.Fragment>
  );
}

export default App;
