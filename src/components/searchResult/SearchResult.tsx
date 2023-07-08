import React from "react";
import './SearchResult.css'
import {useAppSelector} from "../../store";
import {resultsType} from "./results";


export function SearchResult() {
    const searchResults: resultsType = useAppSelector(state => state.searchResult)
    const numberOfResults = useAppSelector(state => state.searchResult.length)
    // const numberOfResults = searchResults.length

    return (
        <div id={'search-result-div'}>
            <h2>{numberOfResults} results found</h2>
            <table>
                <thead>
                <tr>
                    <th>Bus Id</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Day</th>
                </tr>
                </thead>
                <tbody>
                {searchResults.map((result, index) => {
                    return (
                        <tr key={index}>
                            <td>{result.busId}</td>
                            <td>{result.origin}</td>
                            <td>{result.destination}</td>
                            <td>{result.day}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}