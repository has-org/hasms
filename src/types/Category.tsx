import { Product } from "./Product";

export type Category = {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    products: Product[];
    url?: string;
    catalogues: Catalogue[];
  }
