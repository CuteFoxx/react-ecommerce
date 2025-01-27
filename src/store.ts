import {configureStore} from "@reduxjs/toolkit";
import {isOpenSlice} from "./slices/isOpenSlice.ts";
import {featuredProductsSlice} from "./slices/featuredProductsSlice.ts";
import {cartSlice} from "./slices/cartSlice.ts";

export const store = configureStore(
    {
        reducer: {
            isOpen: isOpenSlice.reducer,
            featuredProducts: featuredProductsSlice.reducer,
            cart: cartSlice.reducer,
        }
    }
)