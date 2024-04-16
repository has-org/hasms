'use client';

import { useState } from 'react';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
	const [count, setCount] = useState(0);

	return (
		<>
			{children}
		</>
	);
}
