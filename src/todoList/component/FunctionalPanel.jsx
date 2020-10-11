import React from 'react';
import '../stylesheet/FunctionalPanel.scss';
import { ReactComponent as Search } from '../assets/functional_icon/magnifying-search-lenses-tool.svg';
import { ReactComponent as Sort } from '../assets/functional_icon/sort-down.svg';
import { ReactComponent as Add } from '../assets/functional_icon/add.svg';

const iconSize = 36;

const FunctionalPanel = props => {
	return (
		<div id="functional-panel">
			<Search width={iconSize} height={iconSize}></Search>
			<Sort width={iconSize} height={iconSize}></Sort>
			<Add width={iconSize} height={iconSize}></Add>
		</div>
	);
};

export default FunctionalPanel;
