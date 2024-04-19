import './App.css';
import { CompositionComponent } from './components/compositionComponent/CompositionComponent';
import HigherOrderComponent from './components/higherOrderComponent/HigherOrderComponent';
import SuspenseComponent from './components/suspense/SuspenseComponent';
import ThemeContext from './components/themeContext/ThemeContext';
import UseDeferredValueComponent from './components/useDeferredValue/UseDeferredValueComponent';
import { ThemeProvider } from './context/ThemeContext';
import TransitionComponent from './components/transition/TransitionComponent';
import LazyComponent from './components/lazy/LazyComponent';
import PortalComponent from './components/portal/PortalComponent';

function App() {
	return (
		<>
			<ThemeProvider>
				<CompositionComponent />
				<HigherOrderComponent />
				<ThemeContext />
				<UseDeferredValueComponent />
				<SuspenseComponent />
				<br />
				<TransitionComponent />
				<br />
				<LazyComponent />
				<br />
				<PortalComponent />
			</ThemeProvider>
		</>
	);
}

export default App;
