import "../stylesheet/CategoryBtn.scss";
import React, { useState, useRef } from "react";

const CategoryBtn = (props) => {
  const { name } = props;

  const [ isEdit, setIsEdit ] = useState(false);
  let editName = name;

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

    element.focus();
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
        >
          {editName}
        </span>
      )}
      {!isEdit && name}
    </button>
  );
};

export default CategoryBtn;
