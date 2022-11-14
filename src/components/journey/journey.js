import { useState, useEffect } from "react";

export function Journey(props){

    const [journey, setJourney ] = useState();

    useEffect(() => {
        const departureCode = props.departure.icsCode;
        const destinationCode = props.destination.icsCode;
        fetch(`https://api.tfl.gov.uk/journey/journeyresults/${departureCode}/to/${destinationCode}`)
        .then(response => response.json())
        .then(result => setJourney(result.journeys[0]));
    })

    if(!journey){
        return <p>Loading...</p>
    }else{
        return(
            <>
                <p>Your total fare will be £{(journey.fare.totalCost / 100).toPrecision(3)}.</p>
                <p>Your total journey time will be {journey.duration} minutes.</p>
            </>
        )
    }
    
}