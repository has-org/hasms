import { StaticImageData } from "next/image";


export type Cooperator = {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    url: string;
    image: string;

  }