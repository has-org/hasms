import { ICategory } from './ICategory';
import { IVariant } from './IVariant';
export interface IProduct {
  id: number;
  created_at: string;
  updated_at: string;
  code: string;
  name: string;
  description: string;
  manufacturer: string;
  category_id: number;
  workspace_id: number;
  variants: IVariant[];
  category: ICategory;
}
