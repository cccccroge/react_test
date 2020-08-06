import "../stylesheet/CategoryBtn.scss";
import React from "react";

const CategoryBtn = (props) => {
  const { name } = props;

  return (
    <button
      className="category-btn"
      type="button"
      name="category"
      value={name}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
