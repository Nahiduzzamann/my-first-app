import './App.css';
import Test from './component/test/Test';

function App() {
  return (
    <div className="App">
      <Test></Test>
      <District></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'yellow'
}
function District (){
  return(
    <div style={districtStyle}>
      <h2>Name</h2>
    </div>
  )
}


export default App;
