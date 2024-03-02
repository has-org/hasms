import { IVariant } from "./IVariant";

export interface ISize {
    id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    variants?: IVariant[];
    is_available: Boolean;
  }