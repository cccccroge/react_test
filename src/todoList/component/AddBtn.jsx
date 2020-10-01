import '../stylesheet/AddBtn.scss';
import React from 'react';

const AddBtn = props => {
	const { onClick } = props;

	return (
		<button className="add-btn" type="button" onClick={onClick}>
			+
		</button>
	);
};

export default AddBtn;
