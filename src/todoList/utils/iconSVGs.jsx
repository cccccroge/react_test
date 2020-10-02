import React from 'react';
import { ReactComponent as Calendar } from '../assets/category_icon/calendar.svg';
import { ReactComponent as Laptop } from '../assets/category_icon/laptop.svg';
import { ReactComponent as PaintBrush } from '../assets/category_icon/paint-brush.svg';

const iconWidth = 35;
const iconHeight = 35;

export const iconSVGs = {
	calendar: (
		<Calendar
			alt="calendar icon"
			width={iconWidth}
			height={iconHeight}
			preserveAspectRatio="xMinYMid meet"
			fill="white"
		/>
	),
	laptop: (
		<Laptop
			alt="laptop icon"
			width={iconWidth}
			height={iconHeight}
			preserveAspectRatio="xMinYMid meet"
			fill="white"
		/>
	),
	paint_brush: (
		<PaintBrush
			alt="paint brush icon"
			width={iconWidth}
			height={iconHeight}
			preserveAspectRatio="xMinYMid meet"
			fill="white"
		/>
	),
};
