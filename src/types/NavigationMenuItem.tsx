import { Category } from "./ICategory";

export interface NavigationMenuItem {
    id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    url: string;
    categories?: Category[];
  }
  