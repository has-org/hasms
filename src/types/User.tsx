import { Order } from "./Order";

export interface User {
    id: number;
    email: string;
    name?: string;
    password: string;
    orders: Order[];
  }