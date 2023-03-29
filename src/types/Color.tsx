import { Variant } from "./Variant";

export interface Color {
    id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    value: string;
    variants: Variant[];
  }