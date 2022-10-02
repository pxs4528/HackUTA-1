import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';
import { useEffect, useState } from 'react';
import Axios from 'axios';


function App() {
  const [rocketName, setrocketName] = useState("");
  const [rocketName1, setrocketName1] = useState("");
  const [rocketName2, setrocketName2] = useState("");
  const [rocketName3, setrocketName3] = useState("");
  const [rocketName4, setrocketName4] = useState("");
  const [rocketName5, setrocketName5] = useState("");
  const [rocketName6, setrocketName6] = useState("");
  const [rocketName7, setrocketName7] = useState("");
  const [rocketName8, setrocketName8] = useState("");
  const [rocketName9, setrocketName9] = useState("");
  const [rocketName10, setrocketName10] = useState("");
  const [rocketName11, setrocketName11] = useState("");
  const [rocketName12, setrocketName12] = useState("");
  const [rocketName13, setrocketName13] = useState("");
  const [rocketName14, setrocketName14] = useState("");
  const [rocketName15, setrocketName15] = useState("");
  const [rocketName16, setrocketName16] = useState("");
  const [rocketName17, setrocketName17] = useState("");
  const [rocketName18, setrocketName18] = useState("");
  const [rocketName19, setrocketName19] = useState("");
  const [rocketName20, setrocketName20] = useState("");

  const [value, setValue] = useState('');
  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };
  console.log(value);
  console.log(typeof value);
  console.log(Number(value));
  const [rocketimg, setrocketimg] = useState("");

  
  useEffect(() => {
    Axios.get("https://api.spacexdata.com/v4/payloads").then((res) => {
    console.log(res.data);
    setrocketName(res.data[0].name);
    setrocketName1(res.data[1].name);
    setrocketName2(res.data[2].name);
    setrocketName3(res.data[3].name);
    setrocketName4(res.data[4].name);
    setrocketName5(res.data[5].name);
    setrocketName6(res.data[6].name);
    setrocketName7(res.data[7].name);
    setrocketName8(res.data[8].name);
    setrocketName9(res.data[9].name);
    setrocketName10(res.data[10].name);
    setrocketName11(res.data[11].name);
    setrocketName12(res.data[12].name);
    setrocketName13(res.data[13].name);
    setrocketName14(res.data[14].name);
    setrocketName15(res.data[15].name);
    setrocketName16(res.data[16].name);
    setrocketName17(res.data[17].name);
    setrocketName18(res.data[18].name);
    setrocketName19(res.data[19].name);
    setrocketName20(res.data[20].name);
    setrocketimg(res.data[0].name);



  })

  }, []);
  //fetch("https://api.spacexdata.com/v4/rockets").then((res) => res.json()).then((data) => {console.log(data)})
  //setrocketName(res.data.name);
  

  return (
    <div className="App">
      <button>Generate rocket for me!</button>
      <p>0 -{rocketName}</p>
      <p>1 - {rocketName1}</p>
      <p>2 - {rocketName2}</p>
      <p>3 - {rocketName3}</p>
      <p>4 - {rocketName4}</p>
      <p>5 - {rocketName5}</p>
      <p>6 - {rocketName6}</p>
      <p>7 - {rocketName7}</p>
      <p>8 - {rocketName8}</p>
      <p>9 - {rocketName9}</p>
      <p>10 - {rocketName10}</p>
      <p>11 - {rocketName11}</p>
      <p>12 - {rocketName12}</p>
      <p>13 - {rocketName13}</p>
      <p>14 - {rocketName14}</p>
      <p>15 - {rocketName15}</p>
      <p>16 - {rocketName16}</p>
      <p>17 - {rocketName17}</p>
      <p>18 - {rocketName18}</p>
      <p>19 - {rocketName19}</p>
      <p>20 - {rocketName20}</p>
      <p>Enter the rocket capsule you want!!</p>
      <input
        type="text"
        placeholder="Your fav number"
        value={value}
        onChange={handleChange}
      />
       <img
        src= {rocketimg}
      />

      <p></p>
    </div>

    
  );
}

export default App;