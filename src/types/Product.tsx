import { Catalogue } from "./Catalogue";
import { Category } from "./Category";
import { Color } from "./Color";
import { ProductInventory } from "./ProductInventory";
import { RelatedProduct } from "./RelatedProduct";
import { Size } from "./Size";
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
    currency?: string;
    price: number;
    category_id?: number;
    subcategoryId?: number;
    category?: Category;
    subcategory?: Subcategory;
    relatedProducts?: RelatedProduct;
    variants: Variant[];
    ProductInventory?: ProductInventory[];
    tags?: Tag[];
    catalogues?: Catalogue[];
    product_cart_id: string
  }
  