import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../types/Product.ts";

export type cartStateValue = {
        product: Product,
        quantity: number,
}
export interface cartState {
    items: cartStateValue[]
}

const initialState = {
    items: [],
} as cartState;

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: cartState, action: PayloadAction<cartStateValue>) => {
            const {product,quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.product.id === product.id);

            if(indexProductId >= 0) {
                if(state.items[indexProductId].quantity <= 99){
                    state.items[indexProductId].quantity += quantity;
                } else {
                    state.items[indexProductId].quantity = 99;
                }
            } else {
                state.items.push({product,quantity});
            }
        },
        removeAll: (state) => {
            state.items = [];
        },
        decrement: (state: cartState, action: PayloadAction<{id: number, amount: number}> ) => {
            const {id, amount} = action.payload;

            const indexProductId = (state.items).findIndex(item => item.product.id === id);

            if(state.items[indexProductId].quantity >= 2){
                state.items[indexProductId].quantity -= amount;
            }
        },
        increment: (state: cartState, action: PayloadAction<{id: number, amount: number}> ) => {
            const {id, amount} = action.payload;

            const indexProductId = (state.items).findIndex(item => item.product.id === id);

            if(state.items[indexProductId].quantity < 99){
                state.items[indexProductId].quantity += amount;
            }
        }
    }
})

export const {addToCart,removeAll,decrement,increment} = cartSlice.actions;