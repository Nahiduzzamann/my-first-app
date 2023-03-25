import { useState } from 'react';
import './App.css';
import Test from './component/test/Test';

function App() {
  return (
    <div className="App">
      <Test></Test>
      <District name='Nahid' phone='01750666272'></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'yellow'
}
function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
      setPower(power+1)
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Phone: {props.phone}</p>
      <h1>Power: {power}</h1>
      <button onClick={boostPower}>boost the power</button>
    </div>
  )
}


export default App;
