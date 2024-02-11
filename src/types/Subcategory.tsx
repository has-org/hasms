import { Category } from "./Category";
import { IProduct } from "./Product";

export interface Subcategory {
    id: number;
    name?: string;
    category_id: number;
    category: Category;
    products: IProduct[];
  }