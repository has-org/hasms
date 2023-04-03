import { Color } from "./Color";
import { Image } from "./Image";
import { Product } from "./Product";
import { Size } from "./Size";
import { Tag } from "./Tag";

export interface Variant {
  id: number;
  name: string;
  product: Product;
  product_id: number;
  images: Image[];
  is_available: boolean;
  colors: Color;
  sizes: Size[];
  tags: Tag[];
}