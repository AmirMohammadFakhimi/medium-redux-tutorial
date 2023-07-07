import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {originInputReducer} from "./components/searchInput/originInputSlice";
import {destinationInputReducer} from "./components/searchInput/destinationInputSlice";
import {dayInputReducer} from "./components/searchInput/dayInputSlice";
import {searchResultReducer} from "./components/searchResult/searchResultSlice";


export const store = configureStore({
    reducer: {
        originInput: originInputReducer,
        destinationInput: destinationInputReducer,
        dayInput: dayInputReducer,
        searchResult: searchResultReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch