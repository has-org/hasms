import { Color } from "./Color";
import { Product } from "./Product";
import { Size } from "./Size";
import { Tag } from "./Tag";

export interface Variant {
  id: number;
  name: string;
  product: Product;
  product_id: number;
  image?: string;
  is_available: boolean;
  color: Color;
  sizes: Size[];
  tags: Tag[];
}