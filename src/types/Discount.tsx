
export interface Discount {
    id: number;
    created_at: Date;
    updated_at: Date;
    discount_valid: boolean;
    discount_valid_until: Date;
    discount_percentage_value: string;
    discount_amount_value: string;
    discounted_product_value: string;
    discount_type: string;
  }
  