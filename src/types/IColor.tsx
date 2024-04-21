import { IVariant } from "./IVariant";

export interface IColor {
    id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    value: string;
    variant_id?: number;
    variant?: IVariant;
    color_id: number;
  }