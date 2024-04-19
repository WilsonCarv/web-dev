import React from 'react';

const ChildComponent = ({ isLoading }) => {
	return <div>{isLoading ? <h1>Loading...</h1> : <h1>Loaded</h1>}</div>;
};

export default ChildComponent;
