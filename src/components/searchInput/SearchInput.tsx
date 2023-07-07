import React from "react";
import './SearchInput.css'
import {useAppDispatch, useAppSelector} from "../../store";
import {originInputSlice} from "./originInputSlice";
import {destinationInputSlice} from "./destinationInputSlice";
import {dayInputSlice} from "./dayInputSlice";
import {searchResultSlice} from "../searchResult/searchResultSlice";
import {results, resultsType} from "../searchResult/results";

export function SearchInput() {
    const dispatch = useAppDispatch()

    const originInput = useAppSelector(state => state.originInput)
    const destinationInput = useAppSelector(state => state.destinationInput.value)
    const dayInput = useAppSelector(state => state.dayInput)

    function search(originInput: string, destinationInput: string, dayInput: number): resultsType {
        return results.filter(result => result.origin.toLowerCase() === originInput.toLowerCase() &&
            result.destination.toLowerCase() === destinationInput.toLowerCase() && result.day === dayInput)
    }

    return (
        <div id={'search-input-div'}>
            <label htmlFor='origin'>Origin</label>
            <input type='text' id='origin' value={originInput} onChange={e =>
                dispatch(originInputSlice.actions.setOriginInput(e.target.value))}/>

            <label htmlFor='destination'>Destination</label>
            <input type='text' id='destination' value={destinationInput} onChange={e =>
                dispatch(destinationInputSlice.actions.setDestinationInput(e.target.value))}/>

            <label htmlFor='day'>Day</label>
            <input type='number' min={1} max={30} step={1} id={'day'} value={dayInput} onChange={e =>
                dispatch(dayInputSlice.actions.setDayInput(Number(e.target.value)))}/>

            <button id={'search-button'} onClick={() =>
                dispatch(searchResultSlice.actions.setResults(search(originInput, destinationInput, dayInput)))}>
                Search
            </button>
        </div>
    )
}