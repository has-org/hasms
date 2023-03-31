import { Variant } from "./Variant";

export interface Color {
    id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    value: string;
    variant_id: number;
    variant: Variant;
  }