import React from "react";
import CategoryList from "./CategoryList";
import Header from "./Header";

const SideBar = (props) => {
  return (
    <React.Fragment>
        <div id="side-bar">
            <div className="header-container">
              <Header />
            </div>
            <div className="category-list-container">
              <CategoryList />
            </div>
        </div>
        <hr />
    </React.Fragment>
  );
};

export default SideBar;
