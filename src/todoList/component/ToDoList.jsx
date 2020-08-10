import "../stylesheet/ToDoList.scss";
import React, { useState } from "react";
import SideBar from "../component/SideBar";
import ToDoBoard from "../component/ToDoBoard";
import { ToDoListContext, data_storage } from "../model/ToDoListContext";
import { pick } from "lodash";

const ToDoList = (props) => {
  const [context, setContext] = useState(data_storage);

  // API
  /*  Add a new category named 'name' */
  // TODO: check whether is duplicated
  const addCategory = (name) => {
    setContext({ ...context, categories: [...context.categories, name] });
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
    setContext({ ...context, categories: categories });
  };

  const getTasksRenderInfo = (category) => {
    const tasks = context.tasks;
    const tasks_matched = tasks.filter((task) => task.category === category);
    const tasks_required = tasks_matched.map((task) =>
      pick(task, ["name", "deadline", "priority"])
    );
    return tasks_required;
  };

  const setCurrentCategory = (category) => {
    setContext({ ...context, current_category: category });
  };

  return (
    <ToDoListContext.Provider
      value={{
        context,
        addCategory,
        setCategoryName,
        getTasksRenderInfo,
        setCurrentCategory,
      }}
    >
      <div className="flex-horizontal">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="workspace">
          <ToDoBoard category={context.current_category} />
        </div>
      </div>
    </ToDoListContext.Provider>
  );
};

export default ToDoList;
