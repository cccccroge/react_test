import React from 'react';
import CategoryList from './CategoryList';
import Header from './Header';

const SideBar = (props) => {
    return <div className="flex-vertical">
        <Header />
        <CategoryList />
    </div>
};

export default SideBar;
