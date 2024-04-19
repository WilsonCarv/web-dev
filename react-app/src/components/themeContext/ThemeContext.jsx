import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeContext = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div>
			{theme}
			<button onClick={() => setTheme(theme === 'Dark' ? 'Light' : 'Dark')}>Change theme</button>
		</div>
	);
};

export default ThemeContext;
