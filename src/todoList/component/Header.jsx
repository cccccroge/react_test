import React from 'react';
import "../stylesheet/Header.scss";

const Header = (props) => {
    return <div className="flex-horizontal">
        <img src="../assets/bee.svg"/>
        <h1>LittleBee</h1>
    </div>
};

export default Header;
