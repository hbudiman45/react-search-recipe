import React from "react";

const Recipe = props => {
  const { recipe } = props;
  return (
    <div className="card">
      <img src={recipe.image} className="card-img-top" alt={recipe.label} />
      <div className="card-body">
        <h5 className="card-title">{recipe.label}</h5>
        <ul className="card-text">
          {recipe.ingredientLines.map(ing => (
            <li>{ing}</li>
          ))}
        </ul>
        <p class="card-text">
          <small class="text-muted">
            {Math.round(recipe.calories)} calories
          </small>
        </p>
      </div>
      {console.log(recipe)}
    </div>
  );
};

export default Recipe;
