import React, { useContext, useState } from 'react';
import ToDoBoard from './ToDoBoard';
import ActionStatusBar from './ActionStatusBar';
import { ToDoListContext } from '../model/ToDoListContext';
import { useEffect } from 'react';
import '../stylesheet/Workspace.scss';

const Workspace = props => {
	const { category } = props;
	const { getTasksRenderInfo } = useContext(ToDoListContext);
	const [tasks, setTasks] = useState([]);

	useEffect(() => setTasks(getTasksRenderInfo(category)), [category]);

	return (
		<div id="workspace">
			<ToDoBoard tasks={tasks} />
			<ActionStatusBar tasks={tasks} setTasks={setTasks} />
		</div>
	);
};

export default Workspace;
