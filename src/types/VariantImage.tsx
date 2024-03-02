import { Color } from "./Color";
import { Variant } from "./IVariant";

export interface VariantImage {
    id: number;
    code: string;
    name: string;
    alt?: string;
    url: string;
    variant_id?: number;
    variant?: Variant;
    color_id?: number;
    color?: Color;
  }