import "../stylesheet/ToDoList.scss";
import React, { useState } from "react";
import CategoryList from "../component/CategoryList";
import ToDoBoard from "../component/ToDoBoard";
import { ToDoListContext, data_storage } from "../model/ToDoListContext";

const ToDoList = (props) => {
  const [context, setContext] = useState(data_storage);

  // API
  /*  Add a new category named 'name' */
  // TODO: check whether is duplicated
  const addCategory = (name) => {
    setContext({ categories: [...context.categories, name] });
  };

  /*  Change an existing category name from 'from' to 'to',
      update all associate tasks with the new category name */
  // TODO: check if from exist
  // TODO: finish update part after todo sheet is done
  const setCategoryName = (from, to) => {
    if (from === to) {
      return;
    }

    const categories = context.categories;
    const index = categories.indexOf(from);
    categories[index] = to;
    setContext({ categories: categories });
  };

  return (
    <ToDoListContext.Provider value={{ context, addCategory, setCategoryName }}>
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
