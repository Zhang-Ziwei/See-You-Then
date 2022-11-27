import './css/App.css';
import HomePage from "./pages/HomePage";
import CreateEvent from "./pages/CreateEvent";
import CreatePoll from "./pages/CreatePoll";
import DecideTime from "./pages/DecideTime";
import UserDecideTime from "./pages/UserDecideTime";
import { useState } from 'react';
import ResponsiveAppBar from "./component/ResponsiveAppBar";

function App() {
  const [state, setState] = useState(0);
  const handleChangeState = (s) => {
    setState(s);
  };

  // Functions & variables of decide time
  const [ableDay, setAbleDay] = useState([]);
  const handleClickOnDay = (e) => {
    // const today = new Date(`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`).getTime();
    // const current = new Date(e.currentTarget.id).getTime();
    // console.log(`day > today: ${current >= today}`);
    const tmp = ableDay;
    if(tmp.includes(e.currentTarget.id))
      tmp.splice(tmp.indexOf(e.currentTarget.id), 1)
    else
      tmp.push(e.currentTarget.id);
    setAbleDay([...tmp])
    // console.log(tmp)
  }

  const [availableDay, setAvailableDay] = useState([]);
  const [uncertainDay, setUncertainDay] = useState([]);
  const [unavailableDay, setUnavailableDay] = useState([]);
  const [selectedState, setSelectedState] = useState(0)

  const handleUserClickOnDay = (e) => {
    const id = e.currentTarget.id;
    if(selectedState === 0) {
      setAvailableDay([...availableDay, id]);
      if(uncertainDay.includes(id))
        setUncertainDay(uncertainDay.splice(uncertainDay.indexOf(id), 1));
      else if(unavailableDay.includes(id))
        setUnavailableDay(unavailableDay.splice(unavailableDay.indexOf(id), 1));
    } else if(selectedState === 1) {
      setUncertainDay([...uncertainDay, id]);
      if(availableDay.includes(id))
        setAvailableDay(availableDay.splice(availableDay.indexOf(id), 1));
      else if(unavailableDay.includes(id))
        setUnavailableDay(unavailableDay.splice(unavailableDay.indexOf(id), 1));
    } else {
      setUnavailableDay([...unavailableDay, id]);
      if(uncertainDay.includes(id))
        setUncertainDay(uncertainDay.splice(uncertainDay.indexOf(id), 1));
      else if(availableDay.includes(id))
        setAvailableDay(availableDay.splice(availableDay.indexOf(id), 1));
    }
    // const today = new Date(`${new Date().getFullYear()} ${new Date().getMonth()+1} ${new Date().getDate()}`).getTime();
    // const current = new Date(e.currentTarget.id).getTime();
    // console.log(`day > today: ${current >= today}`);
  }
  const handleChangeSelectedState = (e) => {
    for(let i = 0; i < 3; i++) {
      e.target.parentNode.children[i].classList.remove("disabledSelectState");
      if(e.currentTarget.id != i) {
        e.target.parentNode.children[i].classList.add("disabledSelectState");
      }
    }
    setSelectedState(parseInt(e.currentTarget.id));
  }

  return (
    <div className="container">
      <ResponsiveAppBar />
      {(state === 0) ? <HomePage handleChangeState={handleChangeState}/> :
       (state === 1) ? <CreateEvent handleChangeState={handleChangeState}/> :
       (state === 2) ? <CreatePoll handleChangeState={handleChangeState}/> : 
       (state === 3) ? <DecideTime 
                        handleChangeState={handleChangeState}
                        handleClickOnDay={handleClickOnDay}
                        ableDay={ableDay}
                      /> : 
                      <UserDecideTime
                        handleChangeState={handleChangeState}
                        handleUserClickOnDay={handleUserClickOnDay}
                        ableDay={ableDay}
                        handleChangeSelectedState={handleChangeSelectedState}
                        availableDay={availableDay}
                        uncertainDay={uncertainDay}
                        unavailableDay={unavailableDay}
                      />
      }
    </div>
  );
}

export default App;
