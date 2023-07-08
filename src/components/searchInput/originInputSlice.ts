import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const originInputSlice = createSlice({
    name: 'originInput',
    initialState: '',
    reducers: {
        setOriginInput: (state, action: PayloadAction<string>) => action.payload
    }
})

export const originInputReducer = originInputSlice.reducer