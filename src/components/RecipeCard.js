import React from "react";
import { Card, Avatar, Icon } from "antd";
import { Link } from "react-router-dom";

const Recipe = props => {
  const { recipe } = props;
  return (
    <Link to={"/recipes/"}>
      <Card
        style={{ width: 400, boxShadow: "rgba(0, 0, 0, 0.16)" }}
        cover={<img alt="example" src={recipe.image} />}
      >
        <Card.Meta title={recipe.label} />
        {console.log(recipe)}
      </Card>
    </Link>
  );
};

export default Recipe;
