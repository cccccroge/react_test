import React from 'react';
import ToDoTask from './ToDoTask';
import WithSeparators from './reusable/WithSeparators';
import '../stylesheet/ToDoBoard.scss';

const ToDoBoard = props => {
	const { tasks } = props;

	const toDoTasks = tasks.map(task => (
		<ToDoTask
			key={task.id}
			name={task.name}
			deadline={task.deadline}
			priority={task.priority}
		/>
	));

	const separator = <div className="separator"></div>;

	return (
		<div id="todo-board">
			<WithSeparators separator={separator}>{toDoTasks}</WithSeparators>
		</div>
	);
};

export default ToDoBoard;
