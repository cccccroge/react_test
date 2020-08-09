import React, { useContext } from "react";
import { ToDoListContext } from "../model/ToDoListContext";
import ToDoTask from "./ToDoTask";

const ToDoBoard = (props) => {
  const { category } = props;

  const { getTasksRenderInfo } = useContext(ToDoListContext);

  // Render
  const getToDoTasks = () =>
    getTasksRenderInfo(category).map((info) => (
      <ToDoTask
        name={info.name}
        deadline={info.deadline}
        priority={info.priority}
      />
    ));

  return <div>{getToDoTasks()}</div>;
};

export default ToDoBoard;
