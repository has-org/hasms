import { Category } from "./Category";

export interface NavigationMenu {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    url: string;
    categories: Category[];
  }
  