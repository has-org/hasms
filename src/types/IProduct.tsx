import { ICategory } from './ICategory';
import { IImage } from './IImage';
import { ISubcategory } from './ISubcategory';
import { ITag } from './ITag';
import { IVariant } from './IVariant';
export interface IProduct {
  id: number;
  created_at: string;
  updated_at: string;
  code: string;
  name: string;
  category_id: number;
  variants: IVariant[];
  category: ICategory;
  tags: ITag[]
  images: IImage[]
  main_image: string
}
