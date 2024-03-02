import { IPost } from "./IPost";
import { IProduct } from "./IProduct";
import { IVariant } from "./IVariant";

export interface ITag {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: IProduct[];
    variant?: IVariant;
    variant_id?: number;
    posts: IPost[];
  }
  