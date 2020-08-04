import '../stylesheet/ToDoList.scss';
import React from 'react'
import CategoryList from '../component/CategoryList'
import ToDoBoard from '../component/ToDoBoard'

const ToDoList = (props) => {

    return (
        <div className="flex-horizontal">
            <div className="nav-bar">
                <CategoryList />
            </div>
            <div className="board">
                <ToDoBoard />
            </div>
        </div>
    );

};

export default ToDoList;