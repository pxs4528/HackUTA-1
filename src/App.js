import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';

fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {console.log(data)})
function App() {
  fetch("https://api.spacexdata.com/v4/rockets").then((res) => res.json()).then((data) => {console.log(data)})

  return (
    <div className="App">
      <button>Generate rocket for me!</button>
      <p></p>
    </div>
  );
}

export default App;
