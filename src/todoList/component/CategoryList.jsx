import '../stylesheet/CategoryList.scss';
import React from 'react';
import CategoryItem from '../component/CategoryItem';
import { useContext } from 'react';
import { ToDoListContext } from '../model/ToDoListContext';
import AddBtn from '../component/AddBtn';

const CategoryList = props => {
	const { context, addCategory } = useContext(ToDoListContext);
	const { categories } = context;

	const handleAddBtnClick = e => {
		addCategory('');
	};

	const catetoryItems = categories.map(category => (
		<CategoryItem
			key={category.id}
			id={category.id}
			name={category.name}
			categoryIconKey={category.iconKey}
			active={category.id === context.currentCategoryId}
		/>
	));

	return (
		<div id="category-list">
			{catetoryItems}
			<AddBtn onClick={handleAddBtnClick} />
		</div>
	);
};

export default CategoryList;
