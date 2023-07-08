import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const dayInputSlice = createSlice({
    name: 'dayInput',
    initialState: 1,
    reducers: {
        setDayInput: (state, action: PayloadAction<number>) => action.payload
    }
})

export const dayInputReducer = dayInputSlice.reducer