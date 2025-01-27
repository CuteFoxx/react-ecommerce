import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type cartPopupStateValue = {
    isOpen: boolean;
}
export interface cartPopupState {
    value: cartPopupStateValue
}

const initialState = {
    value: {
        isOpen: false,
    }
} as cartPopupState;

export const cartPopupSlice = createSlice({
    name: "cartPopup",
    initialState,
    reducers: {
        setIsCartPopupOpen: (state: cartPopupState, action: PayloadAction<cartPopupStateValue>) => {
            state.value = action.payload;
        }
    }
})

export const {setIsCartPopupOpen} = cartPopupSlice.actions;