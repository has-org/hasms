import { IProduct } from "./Product";

export interface ProductInventory {
    id: number;
    created_at: Date;
    updated_at: Date;
    available: boolean;
    quantity: number;
    product?: IProduct;
    product_id: number;
  }