import { StaticImageData } from "next/image";
import logo from "../../public/logo2.jpg";
import image4 from '../../public/slide-4.jpg'

type Color = {
  id: number;
  name: string;
  value: string;
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
  id: number,
  name: string;
  colors: Array<Color>;
  price: number;
  currency: string;
  image: string | StaticImageData;
  manufacturer: string;
  category: Category;
};

export const PRODUCTS: Array<Product> = [
  {
    id: 0,
    name: "TAREX",
    colors: [{ id: 0, name: "Red", value: "" },{ id: 0, name: "Black", value: "" }],
    price: 243,
    currency: "BAM",
    image: logo,
    manufacturer: "MODEKA",
    category: {
      id: 0,
      name: "ODJECA",
      subcategory: {
        id: 0,
        name: "JAKNE",
      },
    },
  },
  {
    id: 1,
    name: "SUZUKI MOTOR CASUAL",
    colors: [{ id: 0, name: "Red", value: "" }],
    price: 14,
    currency: "BAM",
    image: image4,
    manufacturer: "MODEKA",
    category: {
      id: 1,
      name: "OBUCA",
      subcategory: {
        id: 0,
        name: "PATIKE",
      },
    },
  },
];
