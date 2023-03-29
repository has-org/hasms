import { Category } from "./Category";
import { Product } from "./Product";

export interface Subcategory {
    id: number;
    name?: string;
    category_id: number;
    category: Category;
    product: Product[];
  }