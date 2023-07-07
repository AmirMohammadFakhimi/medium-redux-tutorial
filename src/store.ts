import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {fromInputReducer} from "./components/searchInput/fromInputSlice";
import {toInputReducer} from "./components/searchInput/toInputSlice";
import {dayInputReducer} from "./components/searchInput/dayInputSlice";
import {searchResultReducer} from "./components/searchResult/searchResultSlice";


export const store = configureStore({
    reducer: {
        fromInput: fromInputReducer,
        toInput: toInputReducer,
        dayInput: dayInputReducer,
        searchResult: searchResultReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch