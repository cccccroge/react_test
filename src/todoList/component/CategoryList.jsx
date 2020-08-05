import React from "react";
import CategoryBtn from "../component/CategoryBtn";
import { useContext } from "react";
import { ToDoListContext } from "../model/ToDoListContext";

const CategoryList = (props) => {
  const { context }= useContext(ToDoListContext);
  console.log(context);
  const categories = context.categories;
  const category_buttons = categories.map((category) => (
    <CategoryBtn name={category} key={category} />
  ));

  return <div>{category_buttons}</div>;
};

export default CategoryList;
