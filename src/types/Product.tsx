import { Catalogue } from "./Catalogue";
import { Category } from "./Category";
import { ProductInventory } from "./ProductInventory";
import { RelatedProduct } from "./RelatedProduct";
import { Subcategory } from "./Subcategory";
import { Tag } from "./Tag";
import { Variant } from "./Variant";
export interface Product {
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    code: string;
    name: string;
    description?: string;
    manufacturer?: string;
    image?: string;
    currency?: string;
    price: number;
    category_id?: number;
    sub_category_id?: number;
    category?: Category;
    sub_category?: Subcategory;
    related_product?: RelatedProduct;
    variants?: Variant[];
    ProductInventory?: ProductInventory[];
    tags?: Tag[];
    catalogues?: Catalogue[];
  }
  