import { Color } from "./Color";
import { Variant } from "./Variant";

export interface Image {
    id: number;
    code: string;
    name: string;
    url: string;
    variant_id?: number;
    variant?: Variant;
    color_id?: number;
    color?: Color;
  }