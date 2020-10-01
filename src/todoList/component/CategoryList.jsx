import '../stylesheet/CategoryList.scss';
import React from 'react';
import CategoryBtn from '../component/CategoryBtn';
import { useContext, useState } from 'react';
import { ToDoListContext } from '../model/ToDoListContext';
import AddBtn from '../component/AddBtn';

const CategoryList = props => {
	const { context, addCategory } = useContext(ToDoListContext);
	const { categories } = context;
	const [isMouseIn, setIsMouseIn] = useState(false);

	const handleAddBtnClick = e => {
		addCategory('new category');
	};

	const handleMouseEnter = () => {
		setIsMouseIn(true);
	};

	const handleMouseLeave = () => {
		setIsMouseIn(false);
	};

	const getCatetoryButtons = () =>
		categories.map(category => <CategoryBtn name={category} key={category} />);

	const listClassName = !isMouseIn ? 'scrollbar-hiden' : '';

	return (
		<div
			id="category-list"
			className={listClassName}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{getCatetoryButtons()}
			<AddBtn onClick={handleAddBtnClick} />
		</div>
	);
};

export default CategoryList;
