import { Category } from "./Category";
import { Product } from "./Product";

export interface Catalogue {
    id: number;
    name: string;
    image: string;
    type?: string;
    primary?: boolean;
    url?: string;
    note?: string;
    categories: Category[];
    products: Product[];
    tags: Tag[];
    blogs: Blog[];
  }