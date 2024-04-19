import React from 'react';
import useOnlineStatus from '../../hooks/useOnlineStatus';

const ChildComponent = ({ isLoading }) => {
	useOnlineStatus();
	return <div>{isLoading ? <h1>Loading...</h1> : <h1>Loaded</h1>}</div>;
};

export default ChildComponent;
