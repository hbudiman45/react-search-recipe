import React, { useState, useEffect } from "react";
import "./App.css";
import Constants from "./config/Constants";
import Recipe from "./components/RecipeCard";
import { Row, Col } from "antd";

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
    console.log(props);
  }, [query]);

  const inputChange = e => {
    setSearch(e.target.value);
    const { pathname } = props.location;
    props.history.push(pathname + "?query=" + e.target.value);
  };
  const submitSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  const renderRecipes = () =>
    recipes.map(rec => (
      <Col span={8} key={rec.recipe.label} style={{ margin: "10px 0" }}>
        <Recipe recipe={rec.recipe} />
      </Col>
    ));

  return (
    <div className="App">
      <h1>React Recipe</h1>
      <form onSubmit={submitSearch}>
        <input type="text" value={search} onChange={inputChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <h1>Loading...</h1>}
      <div className="recipes">
        <Row>{renderRecipes()}</Row>
      </div>
    </div>
  );
};

export default App;
