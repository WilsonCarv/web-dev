import { createContext, useReducer, useContext } from 'react';
const initialState = {
	theme: 'Light'
};

const ThemeContext = createContext(initialState);
const themeReducer = (state, action) => {
	switch (action.type) {
		case 'SET_THEME':
			return { ...state, theme: action.payload };
		default:
			return state;
	}
};
export const ThemeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, initialState);
	const setTheme = theme => {
		dispatch({ type: 'SET_THEME', payload: theme });
	};
	return <ThemeContext.Provider value={{ ...state, setTheme }}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
