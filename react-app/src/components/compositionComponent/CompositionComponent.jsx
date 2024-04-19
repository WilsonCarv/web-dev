import React from 'react';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';

export const CompositionComponent = () => {
	return (
		<ParentComponent>
			<ChildComponent name="Child1" />
		</ParentComponent>
	);
};
