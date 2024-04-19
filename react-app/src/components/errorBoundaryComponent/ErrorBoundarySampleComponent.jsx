import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
const AppComponent = props => {
	return <>App Works {props.name.value}</>;
};

const ErrorBoundarySampleComponent = () => {
	return (
		<ErrorBoundary fallback={<>Something went wrong</>}>
			<AppComponent />
		</ErrorBoundary>
	);
};

export default ErrorBoundarySampleComponent;
