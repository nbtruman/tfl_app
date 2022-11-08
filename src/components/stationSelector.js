import { useState, useEffect } from "react";

export function StationSelector(props){
    const [stations, setStations] = useState([]);
    const [isStations, setIsStations] = useState(false);
    const [departure, setDepature] = useState();
    const [destination, setDestination] = useState();

    // fetches an array of all available stations with the lines that serve them.
    useEffect(() => {
        fetch("https://api.tfl.gov.uk/StopPoint/Mode/tube")
        .then(response => response.json())
        .then(result => {
        // ensures the promise is resolved
        setIsStations(true);
        // contains only the stations
        const arrayResult = result.stopPoints
        // filters the stations to only include those currently served at least 1 line
        const filteredArray = arrayResult.filter(e => e.lines.length !== 0)
        // removes duplicate stations. This works by using the inner .map() method to create an array of arrays where each sub-array contains the "commonName" of the station and the original object. The new Map method then filters out any duplicate names. .values() turns the array of arrays back into an array of objects. Tutorial can be found at:
        // https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
        const removeDuplicates = [...new Map(filteredArray.map((m) => [m.commonName, m])).values()];
        setStations(removeDuplicates);
        })
    }, []);


    if(!isStations){
        return <p>Loading...</p>
    }else{
        return(
            <form onSubmit={props.submit}>
                <label>
                    Select Departure
                <select onChange={(event) => {setDepature(event.target.value)}}>
                    {stations.map((station, index) =>
                    <option key={index} value={station.id}>{station.commonName}</option>)}
                </select>
                </label>
                <label>
                    Select Destination                
                <select onChange={(event) => {setDestination(event.target.value)}}>
                    {stations.map((station, index) =>
                    <option key={index} value={station.id}>{station.commonName}</option>)}
                </select>
                </label>
                <input type="submit"></input>
            </form>
        )
    }
}