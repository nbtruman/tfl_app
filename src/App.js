import { useState } from "react";
import { StationSelector } from './components/stationSelector/stationSelector';
import { Journey } from "./components/journey/journey"
import './App.css';


function App() {

  const [submitDeparture, setSubmitDeparture] = useState(null);
  const [submitDestination, setSubmitDestination] = useState(null);
  const [departure, setDepature] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
      <div id="logo-container">
        <h1>Underground Navigator</h1>
      </div>
      
      <StationSelector  submit={handleSubmit} 
                        depart={departStation} 
                        arrive={destinationStation}/>
      {submitDeparture && submitDestination ? <Journey  departure={JSON.parse(departure)}
                            destination={JSON.parse(destination)} /> : <div></div>}
    </div>
  );
}

export default App;
