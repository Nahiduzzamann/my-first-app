import { useEffect, useState } from 'react';
import './App.css';
import Test from './component/test/Test';

function App() {
  return (
    <div className="App">
      <Test></Test>
      <LoadPost> </LoadPost>
      <District name='Nahid' phone='01750666272'></District>
      <District name='Nahid' phone='01750666272'></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'yellow'
}

function LoadPost() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>
        Posts: {users.length}
      </h1>
      {
        users.map(user =><Post name={user.name}></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div style={{backgroundColor:'red',padding:'20px',marginBottom:'10px',borderRadius:'20px'}}>
      <h2>User Name: {props.name}</h2>
    </div>
  )
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    setPower(power + 1)
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
