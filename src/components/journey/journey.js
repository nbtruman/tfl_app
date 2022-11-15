import { useState, useEffect } from "react";
import { Leg } from "./leg/leg"
import "./journey.css";
import { DirectRoutes } from "./directRoute/directRoute";

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
    }
    if(!journey.fare){
        return(            
            <>
                <div class="summary-information">
                    <DirectRoutes routes={journey.legs}/>
                    <p class="text-block">Your total journey time will be {journey.duration} minutes.</p>
                </div>
                {journey.legs.map((leg, index) => <Leg key={index} information={leg}/>
                )}
            </>
        )
    }else{
        return(            
            <>
                <div class="summary-information">
                    <DirectRoutes routes={journey.legs}/>
                    <p class="text-block">Your total fare will be £{(journey.fare.totalCost / 100).toPrecision(3)}.</p>
                    <p class="text-block">Your total journey time will be {journey.duration} minutes.</p>
                </div>
                {journey.legs.map((leg, index) => <Leg key={index} information={leg}/>
                )}
            </>
    )}
    
}