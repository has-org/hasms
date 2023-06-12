

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



export const ColoredDot = ({ color }: ColorProp) => {
    return (
        // <Link href={`/`}>
        <span style={{
            height: '15px',
            width: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '5px',
            backgroundColor: color.value ? color.value : ''
        }}></span>
        // </Link >
    );
}
