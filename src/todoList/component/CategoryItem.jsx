import '../stylesheet/CategoryItem.scss';
import React, { useContext } from 'react';
import { ToDoListContext } from '../model/ToDoListContext';
import EditableText from './reusable/EditableText';
import { iconSVGs } from '../utils/iconSVGs';

const CategoryItem = props => {
	const { id, name, categoryIconKey } = props;
	const { setCategoryName, setCurrentCategoryId } = useContext(ToDoListContext);

	const onConfirmText = text => {
		setCategoryName(id, text);
	};

	const onClick = () => {
		setCurrentCategoryId(id);
	};

	return (
		<div onClick={onClick}>
			{iconSVGs[categoryIconKey]}
			<EditableText
				defaultText={name}
				placeholder="Your category..."
				onConfirmText={onConfirmText}
			/>
		</div>
	);
};

export default CategoryItem;
