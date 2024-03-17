import { IVariant } from "./IVariant";

export type IProductPrice = {
  
  id: number;
  created_at: string;
  updated_at: string;
  price: number;
  tax_percentage: number;
  tax_amount: number;
  price_without_tax: number;
  currency: string;
  variant: IVariant;
  variant_id: number;
};
