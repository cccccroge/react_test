import { createContext } from 'react';

/* emulate data storage from server */
export const store = {
	categories: [
		{
			id: 1,
			name: 'daily',
			iconKey: 'calendar',
		},
		{
			id: 2,
			name: 'art',
			iconKey: 'paint_brush',
		},
		{
			id: 3,
			name: 'programming',
			iconKey: 'laptop',
		},
	],
	currentCategoryId: 1,
	tasks: [
		{
			id: 1,
			name: 'eat',
			description: 'I should eat',
			deadline: new Date(2020, 8, 15),
			categoryId: 1,
			priority: 'medium',
		},
		{
			id: 2,
			name: 'shit',
			description: 'I should shit',
			deadline: new Date(2020, 8, 20),
			categoryId: 1,
			priority: 'low',
		},
		{
			id: 3,
			name: 'cao',
			description: 'I should cao',
			deadline: new Date(2020, 9, 13),
			categoryId: 1,
			priority: 'high',
		},
	],
};

export const ToDoListContext = createContext(null);
