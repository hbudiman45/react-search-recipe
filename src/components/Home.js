import React, { useState, useEffect } from "react";
import { Row, Spin } from "antd";
import Constants from "../config/Constants";
import SearchForm from "./SearchForm";
import Result from "./Result";
import RecipeDetail from "./RecipeDetail";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState({});

  const { APP_ID, APP_KEY } = Constants;

  useEffect(() => {
    const getRecipes = async () => {
      if (query) {
        setIsLoading(true);
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        setIsLoading(false);
      }
    };
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const inputChange = (e) => {
    setSearch(e.target.value);
    setTimeout(() => {
      setQuery(search);
    }, 1000);
  };

  const onClickCard = (record) => {
    setRecipeSelected(record);
    setShowModal(true);
  };

  return (
    <>
      <h1 className="title">Search For Recipe</h1>
      <SearchForm search={search} inputChange={inputChange} />
      {isLoading && (
        <Row justify="center">
          <Spin />
        </Row>
      )}
      <Result recipes={recipes} onClickCard={onClickCard} />
      {showModal && (
        <RecipeDetail
          showModal={showModal}
          setShowModal={setShowModal}
          recipeSelected={recipeSelected}
        />
      )}
    </>
  );
};

export default App;
