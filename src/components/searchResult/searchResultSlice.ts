import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {resultsType} from "./results";


export const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState: [] as resultsType,
    reducers: {
        setResults: (state: resultsType, action: PayloadAction<resultsType>) => {
            // This is correct. In a mutable manner.
            // for (let i = 0; i < state.length; i++) {
            //     state.pop()
            // }
            //
            // for (let i = 0; i < action.payload.length; i++) {
            //     state.push(action.payload[i])
            // }

            // This is not correct because it changes the reference of the state, so the new UI does not dispatch
            // state = action.payload

            // This is also correct. In an immutable manner.
            return action.payload
        }
    }
})

export const searchResultReducer = searchResultSlice.reducer