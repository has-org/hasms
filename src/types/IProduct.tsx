import { ICategory } from "./ICategory";
import { IVariant } from "./IVariant";
export type IProduct = {
  
  id: number;
  created_at: string;
  updated_at: string;
  code: string;
  name: string;
  description: string;
  manufacturer: string;
  model: string;
  category_id: number;
  order_id: number;
  workspace_id: number;
  image: string;
  variants: IVariant[];
  category: ICategory,
};
