import { IVariant } from "./IVariant"


export type CartContext = {
    cart: IVariant[]
    addToCart: () => {}
    removeFromCart: (id: number) => {}
}

export type CartState = {
    cart: IVariant[]
    addToCart: () => {}
    removeFromCart: (id: number) => {}
}

export type CartAction = {
    type: string
    payload: any
}