import { StaticImageData } from "next/image";
import rebelhorn from "../../public/logos/rebelhorn.webp";
import modeka from "../../public/logos/modeka.png";
import akrapovic from "../../public/logos/akrapovic.png";
import dainese from "../../public/logos/dainese.png";
import hjc from "../../public/logos/hjc.png";
import ixs from "../../public/logos/ixs.png";
import lampa from "../../public/logos/lampa.png";
import motul from "../../public/logos/motul.png";
import oxford from "../../public/logos/oxford.png";
import yamaha from "../../public/logos/yamaha.png";


type cooperator = {

    name: string,
    image: string | StaticImageData;
    href?: string
}

export const Cooperators: Array<cooperator> = [
    { name: 'rebelhorn', image: rebelhorn, href: "" },
    { name: 'akrapovic', image: akrapovic, href: "" },
    { name: 'modeka', image: modeka, href: "" },
    { name: 'dainese', image: dainese, href: "" },
    { name: 'hjc', image: hjc, href: "" },
    { name: 'ixs', image: ixs, href: "" },
    { name: 'lampa', image: lampa, href: "" },
    { name: 'motul', image: motul, href: "" },
    { name: 'oxford', image: oxford, href: "" },
    { name: 'yamaha', image: yamaha, href: "" },
    { name: 'yamaha', image: yamaha, href: "" },
    { name: 'yamaha', image: yamaha, href: "" },
    { name: 'yamaha', image: yamaha, href: "" },
    { name: 'yamaha', image: yamaha, href: "" },
    { name: 'yamaha', image: yamaha, href: "" },
]
