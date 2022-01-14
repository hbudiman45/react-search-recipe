import React from "react";
import { Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchForm = (props) => {
  const { search, inputChange } = props;
  return (
    <Row justify="center" className="search-input">
      <Col xs={20} md={12}>
        <Input
          value={search}
          placeholder="Search for delicious recipes here.."
          onChange={inputChange}
          size="large"
          suffix={<SearchOutlined />}
          // loading
        />
      </Col>
    </Row>
  );
};

export default SearchForm;
