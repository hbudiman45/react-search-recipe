import styled from "styled-components";
import color from "./config/color";

const AppWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 0 24px;
  padding-top: 60px;
  .title {
    text-align: center;
    color: ${color.mainColor};
  }
  .search-input {
    margin-bottom: 38px;
  }

  .ant-input-affix-wrapper-lg {
    border-radius: 12px;
  }
  .ant-card-cover img {
    border-radius: 12px 12px 0 0;
  }
  .ant-card-bordered {
    border-radius: 12px;
  }
`;

export default AppWrapper;

export const ModalWrapper = styled.div`
  color: ${color.dark0};
  .recipe-label {
    margin-top: 12px;
    margin-bottom: 8px;
    color: ${color.mainColor};
  }
  .recipe-calorie {
    color: ${color.dark1};
    margin: 8px 0;
  }
  .recipe-image {
    /* width: 100%; */
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 2px 16px -4px rgba(23, 30, 41, 0.08);
  }
`;
