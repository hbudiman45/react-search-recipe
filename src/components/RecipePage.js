import React from "react";

const RecipePage = props => {
  const { recipe } = props;
  return (
    <div>
      <image src={recipe.image} alt={recipe.label} />
      <h1>{recipe.label}</h1>
    </div>
  );
};

export default RecipePage;
