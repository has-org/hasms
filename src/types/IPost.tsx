import { ITag } from "./ITag";

export interface IPost {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  text: string;
  short_title: string;
  short_description: string;
  main_image?: string | null;
  images: string[];
  thumbnail: string;
  tags: ITag[];
  url?: string;
}