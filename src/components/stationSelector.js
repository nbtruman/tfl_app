import { useState, useEffect } from "react";

export function StationSelector(props){
    const [stations, setStations] = useState([]);
    const [isStations, setIsStations] = useState(false);

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
        // removes duplicate stations 
        const removeDuplicates = [...new Map(filteredArray.map((m) => [m.commonName, m])).values()];
        setStations(removeDuplicates);
        })
    }, []);

    if(!isStations){
        return <p>Loading...</p>
    }else{
        return(
            <form>
                <label>
                    Select Departure
                    <select>
                        {stations.map((station) =>
                        <option>{station.commonName}</option>)}
                    </select>
                </label>
            </form>
        )
    }
}