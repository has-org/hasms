import { Color } from "./Color";
import { VariantImage } from "./VariantImage";
import { Size } from "./Size";
import { Tag } from "./Tag";
import { IProduct } from "./Product";

export interface Variant {
  id: number;
  name: string;
  product?: IProduct;
  product_id: number;
  images: VariantImage[];
  colors: Color[];
  sizes: Size[];
  tags: Tag[];
  variantPrice: string;
}