import "../stylesheet/CategoryItem.scss";
import React, { useContext } from "react";
import { ToDoListContext } from "../model/ToDoListContext";
import EditableText from "./reusable/EditableText";

const CategoryItem = (props) => {
  const { name, categoryIconKey } = props;
  const { setCategoryName, setCurrentCategory } = useContext(ToDoListContext);

  const onConfirmText = (text) => {
    setCategoryName(name, text);
  };

  const onClick = () => {
    setCurrentCategory(name);
  };

  return (
    <div onClick={onClick}>
      <img src={iconKey2Path(categoryIconKey)} alt="category icon"></img>
      <EditableText
        defaultText={name}
        placeholder="Your category"
        onConfirmText={onConfirmText}
      />
    </div>
  );
};

export default CategoryItem;

function iconKey2Path(key) {
  switch (key) {
    case 'calendar':
      return `/logo192.png`;
    case 'laptop':
      return `src/todoList/assets/category_icon/laptop.svg`;
    case 'paint_brush':
      return `src/todoList/assets/category_icon/paint-brush.svg`;
    default:
      throw new Error("Icon key for category is not found");
  }
}
