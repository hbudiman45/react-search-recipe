import React from "react";
import { Card, Tooltip } from "antd";

const Recipe = (props) => {
  const { recipe, onClickCard } = props;
  // console.log(recipe);

  return (
    <Tooltip title={recipe.label} placement="bottom">
      <Card
        hoverable
        cover={<img alt={recipe.label} src={recipe.image} />}
        onClick={() => {
          onClickCard(recipe);
        }}
      >
        <Card.Meta
          title={recipe.label}
          description={`${Math.round(recipe.calories)} calories`}
        />
      </Card>
    </Tooltip>
  );
};

export default Recipe;
