import React, { useEffect } from 'react';

const WithLoading = WrappedComponent => {
	const WithLoading = props => {
		const [isLoading, setIsLoading] = React.useState(true);
		useEffect(() => {
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		}, []);
		return <WrappedComponent isLoading={isLoading} />;
	};
	return WithLoading;
};

export default WithLoading;
