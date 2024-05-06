import { IOrder } from "./IOrder";

export interface User {
    id: number;
    email: string;
    name?: string;
    password: string;
    orders: IOrder[];
  }