import React, { useState, useRef } from 'react';
import '../../stylesheet/reusable/EditableText.scss';

const EditableText = props => {
	const {
		defaultText = '',
		placeholder,
		className: customClass,
		onConfirmText,
	} = props;

	const [text, setText] = useState(defaultText);
	const inputRef = useRef(null);
	const [isEdit, setIsEdit] = useState(false);

	const onMouseDown = e => {
		e.preventDefault();
	};

	const onDoubleClick = _e => {
		setIsEdit(true);
		const el = inputRef.current;
		el.focus();
		moveCursorToEnd(el, text.length);
	};

	const onKeyDown = e => {
		const exitKeys = ['Enter', 'Escape'];
		if (exitKeys.includes(e.key)) {
			inputRef.current.blur();
		}
	};

	const onInputBlur = e => {
		const newText = inputRef.current.innerText;
		setText(newText);
		setIsEdit(false);
		if (onConfirmText) {
			onConfirmText(newText);
		}
	};

	const classNames = [
		'editable-text',
		isEdit && 'editing',
		!text && 'placeholder',
		customClass,
	].filter(Boolean);

	return (
		<span
			ref={inputRef}
			className={classNames.join(' ')}
			contentEditable={true}
			suppressContentEditableWarning={true}
			spellCheck={false}
			onMouseDown={onMouseDown}
			onDoubleClick={onDoubleClick}
			onKeyDown={onKeyDown}
			onBlur={onInputBlur}
		>
			{text ? text : isEdit ? text : placeholder}
		</span>
	);
};

export default EditableText;

function moveCursorToEnd(element, length) {
	const range = document.createRange();
	const sel = window.getSelection();
	range.setStart(element.childNodes[0], length);
	range.collapse(true);
	sel.removeAllRanges();
	sel.addRange(range);
}
