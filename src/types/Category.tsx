import { Product } from "./Product";
import { Subcategory } from "./Subcategory";

export interface Category {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: Product[];
    url?: string;
    sub_categories: Subcategory[];
    catalogues: Catalogue[];
    navigationMenus: NavigationMenu[];
  }