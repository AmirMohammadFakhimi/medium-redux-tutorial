import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const destinationInputSlice = createSlice({
    name: 'destinationInput',
    initialState: {
        value: ''
    },
    reducers: {
        setDestinationInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const destinationInputReducer = destinationInputSlice.reducer