import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ name }) => {
	return <div>{name}</div>;
};

ChildComponent.propTypes = {
	name: PropTypes.string.isRequired
};

export default ChildComponent;
