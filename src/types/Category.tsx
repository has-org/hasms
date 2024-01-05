import { Catalogue } from "./Catalogue";
import { NavigationMenu } from "./NavigationMenu";
import { Product } from "./Product";
import { Subcategory } from "./Subcategory";

export type Category = {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: Product[];
    url?: string;
    catalogues: Catalogue[];
  }
