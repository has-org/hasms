import { IColor } from "./IColor";
import { IVariant } from "./IVariant";

export interface IImage {
    id: number;
    code: string;
    name: string;
    extension: string;
    variant_image_id?: number;
    alt?: string;

  }