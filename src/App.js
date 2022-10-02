import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';
import { useEffect, useState } from 'react';
import Axios from 'axios';


function App() {
  const [rocketName, setrocketName] = useState("");
  useEffect(() => {
    Axios.get("https://api.spacexdata.com/v4/payloads").then((res) => {
    console.log(res.data);
    setrocketName(res.data[0].name);
  })

  }, []);
  //fetch("https://api.spacexdata.com/v4/rockets").then((res) => res.json()).then((data) => {console.log(data)})
  //setrocketName(res.data.name);
  

  return (
    <div className="App">
      <button>Generate rocket for me!</button>
      <p>{rocketName}</p>
    </div>
  );
}

export default App;