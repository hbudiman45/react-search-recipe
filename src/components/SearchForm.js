import React from "react";

const SearchForm = props => {
  const { submitSearch, search, inputChange } = props;
  return (
    <form onSubmit={submitSearch} className="my-3">
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            value={search}
            onChange={inputChange}
            placeholder="Search for delicious recipes here.."
          />
        </div>
        <div className="col">
          <button type="submit" className=" btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
