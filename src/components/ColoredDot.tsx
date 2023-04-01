

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.jpg";


type Color = {
    id: number;
    name: string;
    value?: string;
    image?: string | StaticImageData;
};

type ColorProp = {
    color: Color;
};



export const ColoredDot: React.FC<ColorProp> = ({ color }) => {
    return (
        // <Link href={`/`}>
            <span style={{
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '5px',
                backgroundColor: color.value ? color.value : ''
            }}></span>
        // </Link >
    );
}
