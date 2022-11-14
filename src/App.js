import { useState } from "react";
import { StationSelector } from './components/stationSelector';
import { DirectRoutes } from "./components/directRoute/directRoute";
import { Journey } from "./components/journey/journey"
import './App.css';


function App() {

  const [submitDeparture, setSubmitDeparture] = useState(null);
  const [submitDestination, setSubmitDestination] = useState(null);
  const [departure, setDepature] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isDirect, setIsDirect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // converts the string state back to an object
    const stationOne = JSON.parse(departure);
    const stationTwo = JSON.parse(destination);
    // extracts the lines as an array of strings
    const stationOneLines = stationOne.lines.map(line => line.id)
    const stationTwoLines = stationTwo.lines.map(line => line.id)
    // compares the two arrays and returns a new array of matched lines. Sets the isDirect state to an array.
    setIsDirect(stationOneLines.filter(element => stationTwoLines.includes(element)))
    setSubmitDeparture(departure);
    setSubmitDestination(destination);
  }

  const departStation = (event) => {  
    setSubmitDeparture(null);  
    setDepature(event.target.value);
  }

  const destinationStation = (event) => {
    setSubmitDestination(null);
    setDestination(event.target.value);
  }


  return (
    <div className="App">
      <h1>TfL App</h1>
      <StationSelector  submit={handleSubmit} 
                        depart={departStation} 
                        arrive={destinationStation}/>
      {submitDeparture && submitDestination ? <DirectRoutes directRoutes={isDirect} /> : <div></div>}
      {submitDeparture && submitDestination ? <Journey  departure={JSON.parse(departure)}
                            destination={JSON.parse(destination)} /> : <div></div>}
    </div>
  );
}

export default App;
