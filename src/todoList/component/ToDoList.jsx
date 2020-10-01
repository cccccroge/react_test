import '../stylesheet/ToDoList.scss';
import React, { useState } from 'react';
import SideBar from './SideBar';
import Workspace from './Workspace';
import { ToDoListContext, store } from '../model/ToDoListContext';
import { pick, max } from 'lodash';

const ToDoList = props => {
	const [context, setContext] = useState(store);

	// emulate API
	/*  Add a new category named 'name' with default icon */
	// TODO: check whether is duplicated
	const addCategory = name => {
		const categories = context.categories;
		const newCategory = {
			id: max(categories.map(c => c.id)) + 1,
			name,
			iconKey: 'laptop',
		};
		setContext({ ...context, categories: [...categories, newCategory] });
	};

	/*  Change an existing category name to 'name',
      update all associate tasks with the new category name */
	// TODO: check if 'id' exist
	// TODO: finish update part after todo sheet is done
	const setCategoryName = (id, name) => {
		const categories = context.categories;
		const index = categories.findIndex(c => c.id === id);
		if (!index) {
			throw new Error('setCategoryName: invalid id');
		}
		const newCategories = categories.slice();
		newCategories[index].name = name;
		setContext({ ...context, categories: newCategories });
	};

	const getTasksRenderInfo = categoryId => {
		const tasks = context.tasks;
		const tasks_matched = tasks.filter(t => t.categoryId === categoryId);
		if (!tasks_matched) {
			throw new Error('getTasksRenderInfo: invalid category id');
		}
		const tasks_required = tasks_matched.map(task =>
			pick(task, ['id', 'name', 'deadline', 'priority']),
		);
		return tasks_required;
	};

	const setCurrentCategoryId = id => {
		setContext({ ...context, currentCategoryId: id });
	};

	return (
		<ToDoListContext.Provider
			value={{
				context,
				addCategory,
				setCategoryName,
				getTasksRenderInfo,
				setCurrentCategoryId,
			}}
		>
			<div id="to-do-list">
				<SideBar />
				<Workspace categoryId={context.currentCategoryId} />
			</div>
		</ToDoListContext.Provider>
	);
};

export default ToDoList;
