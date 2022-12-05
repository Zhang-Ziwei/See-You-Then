import './css/App.css';
import HomePage from "./pages/HomePage";
import UserHomePage from "./pages/UserHomePage";
import CreateEvent from "./pages/CreateEvent";
import CreatePoll from "./pages/CreatePoll";
import DecideTime from "./pages/DecideTime";
import EventFinishPage from './pages/EventFinishPage';
import PollFinishPage from './pages/PollFinishPage';
import TimeFinishPage from './pages/TimeFinishPage';
import UserPoll from './pages/UserPoll';
import WannaGo from './pages/WannaGo';
import UserDecideTime from "./pages/UserDecideTime";
import UserPollResult from './pages/UserPollResult';
import WannaGoResult from './pages/WannaGoResult';
import DecideTimeResult from './pages/DecideTimeResult';


import { useState } from 'react';
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import dayjs from 'dayjs';

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

  // Deadline of each task
  const [createEventDeadline, setCreateEventDeadline] = useState(dayjs(new Date()));
  const [createPollDeadline, setCreatePollDeadline] = useState(dayjs(new Date()));
  const [decideTimeDeadline, setDecideTimeDeadline] = useState(dayjs(new Date()));

  // CreateEvent variable
  const [eventName, setEventName] = useState('')
  const [decideEventMethod, setDecideEventMethod] = useState('binary');

  // CreatePoll variable
  const [pollName, setPollName] = useState('');
  const [numOption, setNumOption] = useState(1);
  const [items, setItems] = useState([{title: ''}]);
  const [decideMethod, setDecideMethod] = useState('majority');

  // DecideTime variable
  const [decideTimeName, setDecideTimeName] = useState('');

  return (
    <div className="container">
      <ResponsiveAppBar handleChangeState={handleChangeState}/>
      {(state === 0) ? <HomePage handleChangeState={handleChangeState}/> :
       (state === 99) ? <UserHomePage handleChangeState={handleChangeState}/> :
       (state === 1) ? <CreateEvent 
                        handleChangeState={handleChangeState} 
                        eventName={eventName}
                        setEventName={setEventName}
                        decideEventMethod={decideEventMethod}
                        setDecideEventMethod={setDecideEventMethod}
                        createEventDeadline={createEventDeadline} 
                        setCreateEventDeadline={setCreateEventDeadline}/> :
       (state === 2) ? <CreatePoll 
                        handleChangeState={handleChangeState}
                        pollName={pollName}
                        setPollName={setPollName}
                        numOption={numOption}
                        setNumOption={setNumOption}
                        items={items}
                        setItems={setItems}
                        decideMethod={decideMethod}
                        setDecideMethod={setDecideMethod}
                        createPollDeadline={createPollDeadline} 
                        setCreatePollDeadline={setCreatePollDeadline}
                      /> : 
       (state === 3) ? <DecideTime
                        handleChangeState={handleChangeState}
                        decideTimeName={decideTimeName}
                        setDecideTimeName={setDecideTimeName}
                        handleClickOnDay={handleClickOnDay}
                        ableDay={ableDay}
                        decideTimeDeadline={decideTimeDeadline}
                        setDecideTimeDeadline={setDecideTimeDeadline}
                      /> : 
       (state === 4) ? <EventFinishPage 
                        handleChangeState={handleChangeState}
                        eventName={eventName}
                      /> :
       (state === 5) ? <PollFinishPage 
                        handleChangeState={handleChangeState}
                        pollName={pollName}
                      /> :
       (state === 6) ? <TimeFinishPage 
                        handleChangeState={handleChangeState}
                        decideTimeName={decideTimeName}
                      /> :
       (state === 7) ? <WannaGo 
                        goProps={{
                          title: eventName,
                          deadLine: createEventDeadline.$d.toString(),
                      }}/> :
       (state === 8)? <UserPoll 
                        pollProps={{
                          title: pollName,
                          deadLine: createPollDeadline.$d.toString(),
                          method: decideMethod,
                          choices: items
                      }}/> :
       (state === 9)? <UserDecideTime
                        decideTimeName={decideTimeName}
                        decideTimeDeadline={decideTimeDeadline}
                        handleChangeState={handleChangeState}
                        handleUserClickOnDay={handleUserClickOnDay}
                        ableDay={ableDay}
                        handleChangeSelectedState={handleChangeSelectedState}
                        availableDay={availableDay}
                        uncertainDay={uncertainDay}
                        unavailableDay={unavailableDay}
                      /> :
       (state === 10)? <WannaGoResult
                        goProps={{
                          title: eventName,
                          deadLine: createEventDeadline.$d.toString(),
                      }}/> :
       (state === 11)? <UserPollResult
                        pollProps={{
                          title: pollName,
                          deadLine: createPollDeadline.$d.toString(),
                          method: decideMethod,
                          choices: items
                      }}/> :
       (state === 12)? <DecideTimeResult
                        decideTimeName={decideTimeName}
                        decideTimeDeadline={decideTimeDeadline}
                        handleChangeState={handleChangeState}
                        handleUserClickOnDay={handleUserClickOnDay}
                        ableDay={ableDay}
                        handleChangeSelectedState={handleChangeSelectedState}
                        availableDay={availableDay}
                        uncertainDay={uncertainDay}
                        unavailableDay={unavailableDay}
                      /> :
                      <DecideTimeResult
                        decideTimeName={decideTimeName}
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
