import { useState, Suspense, lazy } from 'react';
import Loading from './Loading';
//import MarkdownPreview from './MarkdownPreview';

const MarkdownPreview = lazy(() => import('./MarkdownPreview'));

export default function LazyComponent() {
	const [showPreview, setShowPreview] = useState(false);
	const [markdown, setMarkdown] = useState('Hello, **world**!');
	return (
		<>
			<textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
			<label>
				<input
					type="checkbox"
					checked={showPreview}
					onChange={e => setShowPreview(e.target.checked)}
				/>
				Show preview
			</label>
			<hr />
			{showPreview && (
				<Suspense fallback={<Loading />}>
					<h2>Preview</h2>
					<MarkdownPreview markdown={markdown} />
				</Suspense>
			)}
		</>
	);
}
