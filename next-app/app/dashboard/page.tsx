import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<p>Dashboard works</p>
			<Link
				className="font-medium text-black dark:text-blue-500 hover:underline"
				href="/dashboard/settings"
			>
				Go to settings
			</Link>
		</main>
	);
};

export default Dashboard;
