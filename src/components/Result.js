import React from "react";
import { Row, Col } from "antd";
import RecipeCard from "./RecipeCard";

const Result = (props) => {
  const { recipes, onClickCard } = props;
  return (
    <Row gutter={[10, 10]} justify="center">
      {recipes.map((recipe) => (
        <Col xs={24} sm={12} md={8}>
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            onClickCard={onClickCard}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Result;
