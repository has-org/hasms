import { Blog } from "./Blog";
import { Product } from "./Product";
import { Variant } from "./Variant";

export interface Tag {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: Product[];
    variant?: Variant;
    variant_id?: number;
    blogs: Blog[];
  }
  