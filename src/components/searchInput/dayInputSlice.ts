import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const dayInputSlice = createSlice({
    name: 'dayInput',
    initialState: 1,
    reducers: {
        setFromInput: (state, action: PayloadAction<number>) => {
            return action.payload
        }
    }
})

export const dayInputReducer = dayInputSlice.reducer