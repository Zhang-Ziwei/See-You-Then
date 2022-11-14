import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import HomePage from './component/HomePage';

function App() {
  const [state, setState] = useState(0);
  return (
    <div>
      <ResponsiveAppBar />
      {(state == 0)? <HomePage /> :
       (state == 1)? <div></div> : <div></div>}
    </div>
  );
}

export default App;
