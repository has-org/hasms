import { StaticImageData } from "next/image";
import hjci90 from "../../public/hjci90.jpg";
import prva1 from "../../public/prva1.jpg";
import rebelhorn from "../../public/rebelhorn.png";
import modeka from "../../public/modeka.jpg";
import fxcruiser from "../../public/fxcruiser.png";
import mogogpyamaha2023 from "../../public/mogogpyamaha2023.jpg";
import yamaha_xmax_300_2023 from "../../public/yamaha_xmax_300_2023.jpg";
import ixs1100_2_4 from "../../public/outboard.jpg";
import akrapovic from "../../public/akrapovic.png";
import walp from "../../public/4445.jpg";

export type CATALOGUE = {
    id: number,
    name: string,
    image: string | StaticImageData;
    href?: string
    primary?: boolean
    type: string
}

export const CATALOGUES: Array<CATALOGUE> = [
    { id: 0, name: 'asd', image: walp, primary: true, type: 'catalogue' },
    { id: 1, name: 'asd', image: rebelhorn, type: 'catalogue' },
    { id: 2, name: 'asd', image: akrapovic, type: 'catalogue' },
    { id: 3, name: 'asd', image: ixs1100_2_4, type: 'catalogue' },
    { id: 4, name: 'asd', image: prva1, type: 'catalogue' },
    { id: 6, name: 'asd', image: yamaha_xmax_300_2023, primary: true, type: 'catalogue' },
    { id: 5, name: 'asd', image: mogogpyamaha2023, type: 'catalogue' },
    { id: 7, name: 'asd', image: modeka, type: 'catalogue' },
]


export const PRIMARY_CATALOGUES: Array<CATALOGUE> = CATALOGUES.filter(c => c.primary)
export const SECONDARY_CATALOGUES: Array<CATALOGUE> = CATALOGUES.filter(c => !c.primary)
export const PRIMARY_CATALOGUE: CATALOGUE = PRIMARY_CATALOGUES[0]
export const FIRST_THREE_CATALOGUES: Array<CATALOGUE> = SECONDARY_CATALOGUES.slice(0, 3)
export const LAST_THREE_CATALOGUES: Array<CATALOGUE> = SECONDARY_CATALOGUES.slice(3, 6)
