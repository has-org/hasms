import { Variant } from "./Variant"


export type CartContext = {
    cart: Variant[]
    addToCart: () => {}
    removeFromCart: (id: number) => {}
}

export type CartState = {
    cart: Variant[]
    addToCart: () => {}
    removeFromCart: (id: number) => {}
}

export type CartAction = {
    type: string
    payload: any
}