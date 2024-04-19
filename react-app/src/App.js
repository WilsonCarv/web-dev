import './App.css';
import { CompositionComponent } from './components/compositionComponent/CompositionComponent';
import HigherOrderComponent from './components/higherOrderComponent/HigherOrderComponent';
import ThemeContext from './components/themeContext/ThemeContext';
import UseDeferredValueComponent from './components/useDeferredValue/UseDeferredValueComponent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<>
			<ThemeProvider>
				<CompositionComponent />
				<HigherOrderComponent />
				<ThemeContext />
				<UseDeferredValueComponent />
			</ThemeProvider>
		</>
	);
}

export default App;
