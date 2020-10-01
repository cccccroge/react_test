import '../stylesheet/CategoryList.scss';
import React from 'react';
import CategoryItem from '../component/CategoryItem';
import { useContext, useState } from 'react';
import { ToDoListContext } from '../model/ToDoListContext';
import AddBtn from '../component/AddBtn';

const CategoryList = props => {
	const { context, addCategory } = useContext(ToDoListContext);
	const { categories } = context;
	const [isMouseIn, setIsMouseIn] = useState(false);

	const handleAddBtnClick = e => {
		addCategory('');
	};

	const handleMouseEnter = () => {
		setIsMouseIn(true);
	};

	const handleMouseLeave = () => {
		setIsMouseIn(false);
	};

	const catetoryItems = categories.map(category => (
		<CategoryItem
			key={category.id}
			id={category.id}
			name={category.name}
			categoryIconKey={category.iconKey}
		/>
	));

	const listClassName = !isMouseIn ? 'scrollbar-hiden' : '';

	return (
		<div
			id="category-list"
			className={listClassName}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{catetoryItems}
			<AddBtn onClick={handleAddBtnClick} />
		</div>
	);
};

export default CategoryList;
