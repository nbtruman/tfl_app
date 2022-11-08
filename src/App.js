import { useState } from "react";
import { StationSelector } from './components/stationSelector';
import './App.css';


function App() {

  const [departure, setDepature] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const departStation = (event) => {
    setDepature(event.target.value);
  }

  const destinationStation = (event) => {
    setDestination(event.target.value);
  }


  return (
    <div className="App">
      <h1>TfL App</h1>
      <StationSelector submit={handleSubmit} depart={departStation} arrive={destinationStation}/>
    </div>
  );
}

export default App;
