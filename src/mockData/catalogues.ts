import { StaticImageData } from "next/image";
import hjci90 from "../../public/hjci90.jpg";
import yamahamt10sp from "../../public/yamahamt10sp.jpg";
import rebelhorn from "../../public/rebelhorn.png";
import modeka from "../../public/modeka.jpg";
import fxcruiser from "../../public/fxcruiser.png";
import rebelhornblog from "../../public/rebelhornblog.jpg";
import xmax from "../../public/2023xmax.jpg";
import ixslogo from "../../public/ixslogo.png";
import akrapovic from "../../public/akrapovic.png";
import yamaha60 from "../../public/yamaha60.jpeg";

export type CATALOGUE = {
    id: number,
    name: string,
    image: string | StaticImageData;
    href?: string
    primary?: boolean
    type: string
}

export const CATALOGUES: Array<CATALOGUE> = [
    { id: 0, name: 'asd', image: yamaha60, primary: true, type: 'catalogue' },
    { id: 1, name: 'asd', image: rebelhorn, type: 'catalogue' },
    { id: 2, name: 'asd', image: akrapovic, type: 'catalogue' },
    { id: 3, name: 'asd', image: ixslogo, type: 'catalogue' },
    { id: 4, name: 'asd', image: xmax, primary: true, type: 'catalogue' },
    { id: 5, name: 'asd', image: yamahamt10sp, type: 'catalogue' },
    { id: 6, name: 'asd', image: rebelhornblog, type: 'catalogue' },
    { id: 7, name: 'asd', image: modeka, type: 'catalogue' },
]


export const PRIMARY_CATALOGUES: Array<CATALOGUE> = CATALOGUES.filter(c => c.primary)
export const SECONDARY_CATALOGUES: Array<CATALOGUE> = CATALOGUES.filter(c => !c.primary)
export const PRIMARY_CATALOGUE: CATALOGUE = PRIMARY_CATALOGUES[0]
export const FIRST_THREE_CATALOGUES: Array<CATALOGUE> = SECONDARY_CATALOGUES.slice(0, 3)
export const LAST_THREE_CATALOGUES: Array<CATALOGUE> = SECONDARY_CATALOGUES.slice(3, 6)
