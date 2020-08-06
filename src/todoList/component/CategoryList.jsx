import "../stylesheet/CategoryList.scss";
import React from "react";
import CategoryBtn from "../component/CategoryBtn";
import { useContext, useState } from "react";
import { ToDoListContext } from "../model/ToDoListContext";
import AddBtn from "../component/AddBtn";

const CategoryList = (props) => {
  const { context } = useContext(ToDoListContext);

  const [ categories, setCategories ] = useState(context.categories);

  // Event
  const handleAddBtnClick = (e) => {
    const newc = categories.slice();
    newc.push("new category");
    setCategories(newc);
  };
    
  // Helper
  const getCatetoryButtons = () => (
    categories.map((category) => (
      <CategoryBtn name={category} key={category} />
    ))
  );

  // Render
  return (
    <div className="flex-vertical">
      {getCatetoryButtons()}
      <AddBtn onClick={handleAddBtnClick} />
    </div>
  );
};

export default CategoryList;
