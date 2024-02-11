import { Blog } from "./Blog";
import { IProduct } from "./Product";
import { Variant } from "./Variant";

export interface Tag {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: IProduct[];
    variant?: Variant;
    variant_id?: number;
    blogs: Blog[];
  }
  