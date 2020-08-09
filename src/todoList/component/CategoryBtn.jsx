import "../stylesheet/CategoryBtn.scss";
import React, { useState, useRef, useContext } from "react";
import { ToDoListContext } from "../model/ToDoListContext";

const CategoryBtn = (props) => {
  const { name } = props;

  const { setCategoryName } = useContext(ToDoListContext);

  const [ isEdit, setIsEdit ] = useState(false);

  const inputRef = useRef(null);

  // Event
  const handleBtnDoubleClick = (e) => {
    e.preventDefault();
    setIsEdit(true);
    setTimeout(() => {
      const input = inputRef.current;
      focusToTextEnd(input);
    }, 0);
  };

  const focusToTextEnd = (element) => {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(element, 1);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const handleInputBlur = () => {
    confirmText();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      confirmText();
    }
  }

  const confirmText = () => {
    setIsEdit(false);
    setCategoryName(name, inputRef.current.textContent);
  };

  // Render
  return (
    <button
      className="category-btn"
      type="button"
      name="category"
      value={name}
      onDoubleClick={handleBtnDoubleClick}
    >
      {isEdit && (
        <span
          ref={inputRef}
          className="category-input"
          role="textbox"
          contentEditable
          suppressContentEditableWarning="true"
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
        >
          {name}
        </span>
      )}
      {!isEdit && name}
    </button>
  );
};

export default CategoryBtn;
