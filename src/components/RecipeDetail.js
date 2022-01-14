import React from "react";
import { Modal, Row, Tag } from "antd";
import { ModalWrapper } from "../App.style";

const RecipeDetail = (props) => {
  const { recipeSelected, showModal, setShowModal } = props;
  console.log("recipeSelected", recipeSelected);
  return (
    <Modal
      visible={showModal}
      footer={null}
      onCancel={() => {
        setShowModal(false);
      }}
    >
      <ModalWrapper>
        <Row justify="center">
          <img
            className="recipe-image"
            src={recipeSelected.image}
            alt={recipeSelected.label}
          />
        </Row>
        <h2 className="recipe-label">{recipeSelected.label}</h2>
        <div>
          {recipeSelected.healthLabels?.slice(0, 4)?.map((item) => {
            return <Tag color="processing">{item}</Tag>;
          })}
        </div>
        <div className="recipe-calorie">{`${Math.round(
          recipeSelected.calories
        )} calories`}</div>
        <div>Recipe: </div>
        <ul className="card-text">
          {recipeSelected.ingredientLines.map((ing) => (
            <li>{ing}</li>
          ))}
        </ul>
      </ModalWrapper>
    </Modal>
  );
};

export default RecipeDetail;
