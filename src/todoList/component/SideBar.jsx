import React from 'react';
import CategoryList from './CategoryList';
import Header from './Header';
import '../stylesheet/SideBar.scss';

const SideBar = props => {
	return (
		<div id="side-bar">
			<Header />
			<CategoryList />
		</div>
	);
};

export default SideBar;
