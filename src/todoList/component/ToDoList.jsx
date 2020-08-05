import "../stylesheet/ToDoList.scss";
import React, { useState } from "react";
import CategoryList from "../component/CategoryList";
import ToDoBoard from "../component/ToDoBoard";
import { ToDoListContext, data_storage } from "../model/ToDoListContext";

const ToDoList = (props) => {
  const [context, setContext] = useState(data_storage);

  const addCategory = (category) => {
    setContext({ categories: [...context.categories, category] });
  };
//   const changeCategoryName = (from, to) => {
//     setContext({ categories });
//   };

  return (
    <ToDoListContext.Provider value={{ context, addCategory }}>
      <div className="flex-horizontal">
        <div className="nav-bar">
          <CategoryList />
        </div>
        <div className="board">
          <ToDoBoard />
        </div>
      </div>
    </ToDoListContext.Provider>
  );
};

export default ToDoList;
