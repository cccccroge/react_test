import React from 'react';
import '../stylesheet/ToDoTask.scss';

const ToDoTask = props => {
	const { name, deadline, priority } = props;

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

	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const deadlineString = deadline.toLocaleDateString(undefined, options);

	return (
		<div className="todo-task-container">
			<div className="todo-task-inner-left">
				<input type="checkbox" />
				<label>{name}</label>
			</div>
			<div className="todo-task-inner-right">
				<label>{deadlineString}</label>
				<svg width="20" height="20">
					<circle cx="10" cy="10" r="10" fill={getPriorityColor()} />
				</svg>
			</div>
		</div>
	);
};

export default ToDoTask;
