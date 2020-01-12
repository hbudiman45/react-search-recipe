import React, { useState, useEffect } from "react";
import "./App.css";
import Constants from "./config/Constants";
import SearchForm from "./components/SearchForm";
import Spinner from "./components/Spinner";
import Result from "./components/Result";

const App = props => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const { APP_ID, APP_KEY } = Constants;

  useEffect(() => {
    const getRecipes = async () => {
      if (query) {
        setIsLoading(true);
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        // console.log(data.hits);
        setRecipes(data.hits);
        setIsLoading(false);
      }
    };
    getRecipes();
  }, [query]);

  const inputChange = e => {
    setSearch(e.target.value);
  };
  const submitSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <h1>Search For Recipe</h1>
      <SearchForm
        submitSearch={submitSearch}
        search={search}
        inputChange={inputChange}
      />

      {isLoading && <Spinner />}
      <Result recipes={recipes} />
    </div>
  );
};

export default App;
