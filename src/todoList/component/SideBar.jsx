import React from "react";
import CategoryList from "./CategoryList";
import Header from "./Header";

const SideBar = (props) => {
  return (
    <React.Fragment>
        <div className="flex-vertical">
            <div className="header">
            <Header />
            </div>
            <div className="category-list">
            <CategoryList />
            </div>
        </div>
        <hr />
    </React.Fragment>
  );
};

export default SideBar;
