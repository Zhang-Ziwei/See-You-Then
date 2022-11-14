import './css/App.css';
import HomePage from "./pages/HomePage";
import CreateEvent from "./pages/CreateEvent";
import CreatePoll from "./pages/CreatePoll";
import DecideTime from "./pages/DecideTime";
import { useState } from 'react';
import ResponsiveAppBar from "./component/ResponsiveAppBar";

function App() {
  const [state, setState] = useState(0);
  const handleChangeState = (s) => {
    setState(s);
  };
  return (
    <div className="container">
      <ResponsiveAppBar />
      {(state === 0) ? <HomePage handleChangeState={handleChangeState}/> :
      (state === 1) ? <CreateEvent handleChangeState={handleChangeState}/> :
      (state === 2) ? <CreatePoll handleChangeState={handleChangeState}/> : 
      <DecideTime handleChangeState={handleChangeState}/>}
    </div>
  );
}

export default App;
