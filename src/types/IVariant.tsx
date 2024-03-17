import { Color } from "./Color";
import { VariantImage } from "./VariantImage";
import { ISize } from "./ISize";
import { ITag } from "./ITag";
import { IProduct } from "./IProduct";
import { IProductPrice } from "./IProductPrice";

export interface IVariant {
  id: number;
  name: string;
  product?: IProduct;
  product_id: number;
  images: VariantImage[];
  colors: Color[];
  sizes: ISize[];
  tags: ITag[];
  product_prices: IProductPrice[];
}