import React, { useContext, useState } from 'react';
import ToDoBoard from './ToDoBoard';
import ActionStatusBar from './ActionStatusBar';
import { ToDoListContext } from '../model/ToDoListContext';
import '../stylesheet/Workspace.scss';
import { useEffect } from 'react';

const Workspace = props => {
	const { categoryId } = props;
	const { getTasksRenderInfo } = useContext(ToDoListContext);
	// const [filteredTasks, setFilteredTasks] = useState(getTasksRenderInfo(categoryId));

	return (
		<div id="workspace">
			<ToDoBoard tasks={getTasksRenderInfo(categoryId)} />
			{/* <ActionStatusBar tasks={getTasksRenderInfo(categoryId)} setTasks={setFilteredTasks} /> */}
		</div>
	);
};

export default Workspace;
