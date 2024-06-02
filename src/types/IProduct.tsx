import { ICategory } from './ICategory';
import { ISubcategory } from './ISubcategory';
import { ITag } from './ITag';
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
  subcategory: ISubcategory;
  model: string;
  tags: ITag[]
}
