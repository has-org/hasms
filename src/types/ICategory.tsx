import { IProduct } from "./IProduct";
import { ISubcategory } from "./ISubcategory";

export type ICategory = {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: IProduct[];
    url?: string;
    main_image: string;
    thumbnail: string;
    subcategories: ISubcategory[];
  }
