import React from "react";
import RecipeCard from "./RecipeCard";

const Result = props => {
  const { recipes } = props;
  return (
    <div className="card-columns">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.recipe.label} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default Result;
