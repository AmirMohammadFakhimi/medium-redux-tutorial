import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {resultsType} from "./results";

export const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState: [],
    reducers: {
        setResults: (state: resultsType, action: PayloadAction<resultsType>) => {
            state = action.payload
        }
    }
})

export const searchResultReducer = searchResultSlice.reducer