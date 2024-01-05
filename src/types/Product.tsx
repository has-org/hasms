import { Variant } from "./Variant";
export type Product = {
  
  id: number;
  created_at: string;
  updated_at: string;
  code: string;
  name: string;
  description: string;
  manufacturer: string;
  model: string;
  price: number;
  category_id: number;
  order_id: number;
  workspace_id: number;
  image: string;
  variants: Variant[];

};
