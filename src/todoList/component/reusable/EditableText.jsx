import React, { useState, useRef, useEffect } from "react";
import "../../stylesheet/reusable/EditableText.scss";

const EditableText = (props) => {
  const { placeHolder, editOnCreated = false, className = "" } = props;

  const inputRef = useRef(null);

  useEffect(() => {
    if (editOnCreated) {
      inputRef.current.focus();
    }
  }, []);

  const [isEdit, setIsEdit] = useState(editOnCreated);
  const getClassName = () => {
    const classArr = ["editable-text"];
    if (isEdit) {
      classArr.push("editing");
    }
    if (className) {
      classArr.push(className);
    }
    return classArr.join(" ");
  };

  const onDoubleClick = (_e) => {
    inputRef.current.focus();
  };
  const onKeyDown = (e) => {
    const blurKeys = ["Enter", "Escape"];
    if (blurKeys.includes(e.key)) {
      inputRef.current.blur();
    }
  };
  const onFocus = () => {
    setIsEdit(true);
  };
  const onBlur = () => {
    setIsEdit(false);
  };

  return (
    <input
      ref={inputRef}
      className={getClassName()}
      type="text"
      placeholder={placeHolder}
      onPointerDown={(e) => e.preventDefault()}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default EditableText;
