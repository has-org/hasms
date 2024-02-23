import { IPost } from "./IPost";
import { IProduct } from "./Product";
import { Variant } from "./Variant";

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
  