import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';
import './styles.css';

export default function PortalComponent() {
	return (
		<>
			<div className="clipping-container">
				<NoPortalExample />
			</div>
			<div className="clipping-container">
				<PortalExample />
			</div>
		</>
	);
}
