import { StaticImageData } from "next/image";
import logo from "../../public/logo2.jpg";
import image4 from "../../public/slide-4.jpg";
import xmax300s from "../../public/xmax300s.jpg";
import tmax from "../../public/tmax.jpg";
import yam380s from "../../public/yam380s.jpg";
import f6cmhl from "../../public/f6cmhl.jpg";
import fxcruiser from "../../public/fxcruiser.png";
import ixsHemlet from "../../public/ixs1100_2_4.jpg";
import ixsHelmet100 from "../../public/ixs100_1_0.jpg";
import hjci90 from "../../public/hjci90.jpg";

type Variants = {
  productColorVariants: Array<ProductColorVariants>;
};

type ProductColorVariants = {
  id: number;
  name: string;
  image: string | StaticImageData;
  color: Color;
};

type Color = {
  id: number;
  name: string;
  value?: string;
  image?: string | StaticImageData;
};

type Subcategory = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
  subcategory: Subcategory;
};

type Product = {
  id: number;
  name: string;
  description: string;
  colors: Array<Color>;
  price: number;
  currency: string;
  image: string | StaticImageData;
  manufacturer: string;
  category: Category;
  variants?: Array<Variants>;
};

export const PRODUCTS: Array<Product> = [
  {
    id: 0,
    name: "XMAX 300 2022",
    description: "",
    colors: [
      { id: 0, name: "Icon Blue", value: "" },
      { id: 1, name: "Sword Gray", value: "" },
      { id: 2, name: "Tech Black", value: "" },
    ],
    price: 14100,
    currency: "BAM",
    image: xmax300s,
    manufacturer: "YAMAHA",
    category: {
      id: 0,
      name: "MOTORI",
      subcategory: { id: 0, name: "NOVO" },
    },
    variants: [
      {
        productColorVariants: [
          {
            id: 0,
            name: "",
            image: "",
            color: { id: 0, name: "Icon Blue" },
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Tmax Tech Max",
    description: "",
    colors: [{ id: 0, name: "Red", value: "" }],
    price: 31600,
    currency: "BAM",
    image: tmax,
    manufacturer: "YAMAHA",
    category: {
      id: 1,
      name: "MOTORI",
      subcategory: {
        id: 0,
        name: "NOVO",
      },
    },
  },

  {
    id: 2,
    name: "YAM 380 s",
    description: "",
    colors: [{ id: 0, name: "Gray", value: "" }],
    price: 3250,
    currency: "BAM",
    image: yam380s,
    manufacturer: "YAMAHA",
    category: {
      id: 1,
      name: "GUMENJACI",
      subcategory: {
        id: 0,
        name: "NOVO",
      },
    },
  },
  {
    id: 3,
    name: "F6CMHL",
    description: "",
    colors: [{ id: 0, name: "Gray", value: "" }],
    price: 3380,
    currency: "BAM",
    image: f6cmhl,
    manufacturer: "YAMAHA",
    category: {
      id: 1,
      name: "MARINA",
      subcategory: {
        id: 0,
        name: "VANBRODSKI MOTORI",
      },
    },
  },
  {
    id: 4,
    name: "FX CRUISER SVHO",
    description: "",
    colors: [{ id: 0, name: "BLACK", value: "" }],
    price: 42300,
    currency: "BAM",
    image: fxcruiser,
    manufacturer: "YAMAHA",
    category: {
      id: 1,
      name: "MARINA",
      subcategory: {
        id: 0,
        name: "JET SKI",
      },
    },
  },
  {
    id: 5,
    name: "1100 2.4",
    description: "",
    colors: [
      { id: 0, name: "PLAVA", value: "" },
      { id: 1, name: "SIVA", value: "" },
      { id: 2, name: "CRVENA", value: "" },
      { id: 3, name: "FLUO", value: "" },
    ],
    price: 265,
    currency: "BAM",
    image: ixsHemlet,
    manufacturer: "IXS",
    category: {
      id: 1,
      name: "KACIGA",
      subcategory: {
        id: 0,
        name: "INTEGRALNE",
      },
    },
  },
  {
    id: 6,
    name: "100 1.0",
    description: "",
    colors: [
      { id: 0, name: "BIJELA", value: "" },
      { id: 1, name: "SIVA", value: "" },
      { id: 2, name: "MAT ZELENA", value: "" },
    ],
    price: 235,
    currency: "BAM",
    image: ixsHelmet100,
    manufacturer: "IXS",
    category: {
      id: 1,
      name: "KACIGA",
      subcategory: {
        id: 0,
        name: "JET",
      },
    },
  },
  {
    id: 6,
    name: "I90",
    description: "",
    colors: [
      { id: 0, name: "SIVO/CRVENA", value: "" },
      { id: 1, name: "MAT CRNO/ZELENA", value: "" },
      { id: 2, name: "PERLA BIJELA", value: "" },
    ],
    price: 550,
    currency: "BAM",
    image: hjci90,
    manufacturer: "HJC",
    category: {
      id: 1,
      name: "KACIGA",
      subcategory: {
        id: 0,
        name: "MODULARNE",
      },
    },
  },
];
