import { Color } from "./Color";
import { VariantImage } from "./VariantImage";
import { Product } from "./Product";
import { Size } from "./Size";
import { Tag } from "./Tag";

export interface Variant {
  id: number;
  name: string;
  product?: Product;
  product_id: number;
  images: VariantImage[];
  is_available: boolean;
  quantity: number;
  colors: Color[];
  sizes: Size[];
  tags: Tag[];
  variantPrice: string;
}