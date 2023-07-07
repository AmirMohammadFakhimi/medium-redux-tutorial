import React from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {fromInputSlice} from "./fromInputSlice";
import {toInputSlice} from "./toInputSlice";
import {dayInputSlice} from "./dayInputSlice";

export function SearchInput() {
    const dispatch = useAppDispatch()

    const fromInput = useAppSelector(state => state.fromInput)
    const toInput = useAppSelector(state => state.toInput.value)
    const dayInput = useAppSelector(state => state.dayInput)

    function search(fromInput: string, toInput: string, dayInput: number) {
        
    }

    return (
        <div>
            <label htmlFor='from'>from</label>
            <input type='text' id='from' value={fromInput} onChange={e =>
                dispatch(fromInputSlice.actions.setFromInput(e.target.value))}/>

            <label htmlFor='to'>to</label>
            <input type='text' id='to' value={toInput} onChange={e =>
                dispatch(toInputSlice.actions.setFromInput(e.target.value))}/>

            <label htmlFor='day'>day</label>
            <input type='number' min={1} max={30} step={1} id={'day'} value={dayInput} onChange={e =>
                dispatch(dayInputSlice.actions.setFromInput(Number(e.target.value)))}/>

            <button>Search</button>
        </div>
    )
}