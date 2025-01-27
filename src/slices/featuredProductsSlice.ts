import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../types/Product.ts";

type featuredProductsStateValue = {
    data: Product[];
}
export interface featuredProductState {
    value: featuredProductsStateValue
}

const initialState = {
    value: {
        data: [],
    }
} as featuredProductState;

export const featuredProductsSlice = createSlice({
    name: "isOpen",
    initialState,
    reducers: {
        setFeaturedData: (state: featuredProductState, action: PayloadAction<featuredProductsStateValue>) => {
            state.value = action.payload;
        }
    }
})

export const {setFeaturedData} = featuredProductsSlice.actions;