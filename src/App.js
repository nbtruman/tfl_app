import { useState, useEffect } from "react";
import './App.css';
import Stations from "./resources/Stations.json"

function App() {
  const stationList = Object.values(JSON.parse(JSON.stringify(Stations)));
  console.log(stationList[135].Name);


  return (
    <div className="App">
      <h1>TfL App</h1>
      <p></p>
    </div>
  );
}

export default App;
