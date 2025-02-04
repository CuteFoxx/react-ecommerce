import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../types/Product.ts";

let items;
if(localStorage.getItem("cart") !== null) {
    items = JSON.parse(localStorage.getItem("cart") || '' ) ;
} else {
    items = [];
}

export type cartStateValue = {
        product: Product,
        quantity: number,
}
export interface cartState {
    items: cartStateValue[]
}

const initialState = {
    items: items,
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

            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeAll: (state) => {
            state.items = [];

            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        decrement: (state: cartState, action: PayloadAction<{id: number, amount: number}> ) => {
            const {id, amount} = action.payload;

            const indexProductId = (state.items).findIndex(item => item.product.id === id);

            if(state.items[indexProductId].quantity >= 2){
                state.items[indexProductId].quantity -= amount;
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        increment: (state: cartState, action: PayloadAction<{id: number, amount: number}> ) => {
            const {id, amount} = action.payload;

            const indexProductId = (state.items).findIndex(item => item.product.id === id);

            if(state.items[indexProductId].quantity < 99){
                state.items[indexProductId].quantity += amount;
            }

            localStorage.setItem("cart", JSON.stringify(state.items));
        }
    }
})

export const {addToCart,removeAll,decrement,increment} = cartSlice.actions;