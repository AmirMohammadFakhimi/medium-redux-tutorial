import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const fromInputSlice = createSlice({
    name: 'fromInput',
    initialState: '',
    reducers: {
        setFromInput: (state, action: PayloadAction<string>) => {
            return action.payload
        }
    }
})

export const fromInputReducer = fromInputSlice.reducer