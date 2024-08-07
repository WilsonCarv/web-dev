import React from 'react';
import PropTypes from 'prop-types';

const ParentComponent = ({ children }) => {
	return <div>ParentComponent{children}</div>;
};

ParentComponent.propTypes = {
	children: PropTypes.node
};

export default ParentComponent;
