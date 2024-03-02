import { Category } from "./ICategory";
import { NavigationMenuItem } from "./NavigationMenuItem";

export interface NavigationMenu {
    id: number;
    created_at?: Date;
    updated_at?: Date;
    name: string;
    url: string;
    navigation_menu_items?: NavigationMenuItem[];
  }
  