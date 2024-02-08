import { Tag } from "./Tag";

export interface Blog {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
  image?: string | null;
  tags: Tag[];
  url?: string;
}