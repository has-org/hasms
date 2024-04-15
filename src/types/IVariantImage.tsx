import { IColor } from "./IColor";
import { IImage } from "./IImage";
import { IVariant } from "./IVariant";

export interface IVariantImage {
    id: number;
    code: string;
    name: string;
    alt?: string;
    url: string;
    variant_id?: number;
    variant?: IVariant;
    color_id?: number;
    color?: IColor;
    images: IImage[];
  }