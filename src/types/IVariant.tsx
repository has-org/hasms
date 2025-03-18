import { IColor } from "./IColor";
import { IVariantImage } from "./IVariantImage";
import { ISize } from "./ISize";
import { ITag } from "./ITag";
import { IProduct } from "./IProduct";
import { IProductPrice } from "./IProductPrice";
import { IImage } from "./IImage";

export interface IVariant {
  id: number;
  name: string;
  product?: IProduct;
  product_id: number;
  tags: ITag[];
  product_prices: IProductPrice[];
  images: IImage[]
}