import './App.css';
import { CompositionComponent } from './components/compositionComponent/CompositionComponent';
import HigherOrderComponent from './components/higherOrderComponent/HigherOrderComponent';
import ThemeContext from './components/themeContext/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<>
			<ThemeProvider>
				<CompositionComponent />
				<HigherOrderComponent />
				<ThemeContext />
			</ThemeProvider>
		</>
	);
}

export default App;
