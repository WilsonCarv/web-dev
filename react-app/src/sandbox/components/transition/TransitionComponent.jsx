import { useEffect, useState, useTransition } from 'react';
import TabButton from './TabButton';
import AboutTab from './AboutTab';
import PostsTab from './PostsTab';
import ContactTab from './ContactTab';

export default function TransitionComponent() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState('about');

	function selectTab(nextTab) {
		startTransition(() => {
			setTab(nextTab);
		});
	}
	useEffect(() => {
		console.log('tab changed to', isPending);
	}, [isPending]);

	return (
		<>
			<TabButton isActive={tab === 'about'} onClick={() => selectTab('about')}>
				About
			</TabButton>
			<TabButton isActive={tab === 'posts'} onClick={() => selectTab('posts')}>
				Posts (slow)
			</TabButton>
			<TabButton isActive={tab === 'contact'} onClick={() => selectTab('contact')}>
				Contact
			</TabButton>
			<hr />
			{tab === 'about' && <AboutTab />}
			{tab === 'posts' && <PostsTab />}
			{tab === 'contact' && <ContactTab />}
		</>
	);
}
