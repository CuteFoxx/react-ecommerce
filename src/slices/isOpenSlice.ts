import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type isOpenStateValue = {
    isOpen: boolean;
}
export interface isOpenState {
    value: isOpenStateValue
}

const initialState = {
    value: {
        isOpen: false,
    }
} as isOpenState;

export const isOpenSlice = createSlice({
    name: "isOpen",
    initialState,
    reducers: {
        setIsOpen: (state: isOpenState, action: PayloadAction<isOpenStateValue>) => {
            state.value = action.payload;
        }
    }
})

export const {setIsOpen} = isOpenSlice.actions;