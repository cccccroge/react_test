import React from "react";

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

    return (<div className="outer-flex-horizontal">
        <div className="inner-flex-horizontal-left">
            <input type="checkbox" />
            <label>{name}</label>
        </div>
        <div className="inner-flex-horizontal-right">
            <label>{deadlineString}</label>
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" fill={getPriorityColor()} />
            </svg>
        </div>
    </div>);
};

export default ToDoTask;