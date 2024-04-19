export default function MarkdownPreview({ markdown }) {
	return (
		<>
			<div className="content">{JSON.stringify(markdown)}</div>
		</>
	);
}
