import React from 'react';
import WithLoading from './WithLoading';
import ChildComponent from './ChildComponent';

const HigherOrderComponent = () => {
	const MyComponentWithLoading = WithLoading(ChildComponent);
	return <MyComponentWithLoading />;
};

export default HigherOrderComponent;
