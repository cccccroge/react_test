import React, { useContext, useState } from 'react';
import ToDoBoard from './ToDoBoard';
import FunctionalPanel from './FunctionalPanel';
import { ToDoListContext } from '../model/ToDoListContext';
import '../stylesheet/Workspace.scss';
import { useEffect } from 'react';

const Workspace = props => {
	const { categoryId } = props;
	const { getTasksRenderInfo } = useContext(ToDoListContext);
	// const [filteredTasks, setFilteredTasks] = useState(getTasksRenderInfo(categoryId));

	return (
		<div id="workspace">
			<FunctionalPanel />
			<ToDoBoard tasks={getTasksRenderInfo(categoryId)} />
		</div>
	);
};

export default Workspace;
