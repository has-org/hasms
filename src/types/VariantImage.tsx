import { Color } from "./Color";
import { IVariant } from "./IVariant";

export interface VariantImage {
    id: number;
    code: string;
    name: string;
    alt?: string;
    url: string;
    variant_id?: number;
    variant?: IVariant;
    color_id?: number;
    color?: Color;
  }