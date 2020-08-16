import React from "react";
import "../stylesheet/ToDoTask.scss"

const ToDoTask = (props) => {
    const { name, deadline, priority } = props;

    // Render
    const getPriorityColor = () => {
        switch (priority) {
            case 'high':
                return 'red';
            case 'medium':
                return 'yellow';
            case 'low':
                return 'green';
            default:
                return 'white';
        }
    };

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const deadlineString = deadline.toLocaleDateString(undefined, options);

    return (
      <div className="todo-task-container">
        <div className="todo-task-inner-left">
          <input type="checkbox" />
          <label>{name}</label>
        </div>
        <div className="todo-task-inner-right">
          <label>{deadlineString}</label>
          <svg width="10" height="10">
            <circle cx="5" cy="5" r="5" fill={getPriorityColor()} />
          </svg>
        </div>
      </div>
    );
};

export default ToDoTask;