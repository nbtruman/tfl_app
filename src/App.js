import { useState } from "react";
import { StationSelector } from './components/stationSelector';
import './App.css';


function App() {

  const handleSubmit = (event) => {
    console.log(event.target)
    event.preventDefault();
  }


  return (
    <div className="App">
      <h1>TfL App</h1>
      <StationSelector submit={handleSubmit} />
    </div>
  );
}

export default App;
