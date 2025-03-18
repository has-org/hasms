import { IColor } from "./IColor";
import { IVariant } from "./IVariant";

export interface IImage {
    id: number;
    code: string;
    name: string;
    extension: string;
    main_image: boolean;
    thumbnail: boolean;
    alt?: string;
  }