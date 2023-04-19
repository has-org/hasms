import { Variant } from "./Variant";

export interface Size {
    id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    variants?: Variant[];
  }