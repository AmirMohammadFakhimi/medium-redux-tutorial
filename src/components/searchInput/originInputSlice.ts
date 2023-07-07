import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {results} from "../searchResult/results";

export const originInputSlice = createSlice({
    name: 'originInput',
    initialState: results[0].origin,
    reducers: {
        setOriginInput: (state, action: PayloadAction<string>) => action.payload
    }
})

export const originInputReducer = originInputSlice.reducer