import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {results} from "../searchResult/results";

export const destinationInputSlice = createSlice({
    name: 'destinationInput',
    initialState: {
        value: results[0].destination
    },
    reducers: {
        setDestinationInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const destinationInputReducer = destinationInputSlice.reducer