'use client';

import { ReactNode, useState } from 'react';

const ImageSelect = ({ children, defaultImage }: { children: ReactNode, defaultImage: string }) => {
	const [selectedImage, setSelectedImage] = useState({});

	return <>

    {children}
    </>;
};
export default ImageSelect;
