import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const toInputSlice = createSlice({
    name: 'toInput',
    initialState: {
        value: ''
    },
    reducers: {
        setFromInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const toInputReducer = toInputSlice.reducer