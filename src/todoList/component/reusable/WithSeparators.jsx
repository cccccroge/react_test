import React from 'react';

const WithSeparators = props => {
	const { children: components, separator } = props;

	const withSeparators = [];

	for (let i = 0; i < components.length - 1; ++i) {
		withSeparators.push(components[i]);
		withSeparators.push(separator);
	}
	withSeparators.push(components[components.length - 1]);

	return withSeparators.map((c, idx) => React.cloneElement(c, { key: idx }));
};

export default WithSeparators;
