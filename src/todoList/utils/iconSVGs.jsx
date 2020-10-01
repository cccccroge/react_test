import React from 'react';
import { ReactComponent as Calendar } from '../assets/category_icon/calendar.svg';
import { ReactComponent as Laptop } from '../assets/category_icon/laptop.svg';
import { ReactComponent as PaintBrush } from '../assets/category_icon/paint-brush.svg';

export const iconSVGs = {
	calendar: (
		<Calendar
			alt="calendar icon"
			width={50}
			height={50}
			preserveAspectRatio="xMinYMid meet"
			fill="white"
		/>
	),
	laptop: (
		<Laptop
			alt="laptop icon"
			width={50}
			height={50}
			preserveAspectRatio="xMinYMid meet"
			fill="white"
		/>
	),
	paint_brush: (
		<PaintBrush
			alt="paint brush icon"
			width={50}
			height={50}
			preserveAspectRatio="xMinYMid meet"
			fill="white"
		/>
	),
};
