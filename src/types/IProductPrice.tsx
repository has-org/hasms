import { IVariant } from "./IVariant";

export type IProductPrice = {
  
  id: number;
  created_at: string;
  updated_at: string;
  price: string;
  tax_percentage: number;
  tax_amount: string;
  price_without_tax: string;
  currency: string;
  variant: IVariant;
  variant_id: number;
};
