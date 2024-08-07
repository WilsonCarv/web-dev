import { useDebugValue, useEffect, useState } from 'react';
function useOnlineStatus() {
	const [online, setOnline] = useState(false);
	useDebugValue(online ? 'Online' : 'Offline');
	useEffect(() => {
		setTimeout(() => {
			setOnline(true);
		}, 3000);
	}, []);
}
export default useOnlineStatus;
