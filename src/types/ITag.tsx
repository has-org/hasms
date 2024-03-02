import { IPost } from "./IPost";
import { IProduct } from "./IProduct";
import { Variant } from "./IVariant";

export interface ITag {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: IProduct[];
    variant?: Variant;
    variant_id?: number;
    posts: IPost[];
  }
  