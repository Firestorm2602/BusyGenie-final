import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
          BrowserRouter as Router, 
          Routes,
          Route
        }
from 'react-router-dom';
import Home from './pages/Home';
import Alarms from './pages/Alarms';
import Calendar from './pages/Calendar';
import Feedback from './pages/Feedback';
import Graphs from './pages/Graphs';
import Timer from './pages/Timer';
import ToDoList from './pages/ToDoList';
import AlarmContext from './components/AlarmContext';


function App() {

  const alarms = [
    {
      name: "alarm1",
      date: "2022-02-09",
      time: "23:19",
      id: 11,
    },
  ]
  const [alarmArray, setAlarmArray] = useState(alarms);
  const [audio] = useState(new Audio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"));
  function ringBell(element){
    audio.muted=true;
    audio.play();
    audio.muted=false;
    audio.play();
    console.log("alarm rang for" , element.name);
  }
  
  function abc (){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var todayDate =  yyyy + '-' + mm + '-' +dd;
    function setAlarm(element){
      var alarmDate = new Date (element.date.slice(0,4),(element.date.slice(5,7))-1,element.date.slice(8,10),element.time.slice(0,2),element.time.slice(3,5));
      let timeToAlarm = alarmDate-today;
      if(timeToAlarm>=0){
        setTimeout(() => {
          ringBell(element);
        }, timeToAlarm);
      }
    }
    function checkfunction(element, index){
      if(element.date===todayDate){
        setAlarm(element);
      }
    }
    alarmArray.map(checkfunction)
  }

  return (
    <div className="App">
      <AlarmContext.Provider value={{
                alarmArray ,
                setAlarmArray ,
            }}>
      <Router>
      <Navbar/>
      {abc()}
      <div className="site-container">
            <Routes>
              <Route path="/"  element={<Home/>}></Route>
              <Route path="/alarms" element={<Alarms 
              // setAlarmArray={setAlarmArray} alarmArray={alarmArray}
              />}></Route>
              <Route path="/calendar" element={<Calendar/>}></Route>
              <Route path="/feedback" element={<Feedback/>}></Route>
              <Route path="/graphs" element={<Graphs/>}></Route>
              <Route path="/timer" element={<Timer/>}></Route>
              <Route path="/toDoList" element={<ToDoList/>}></Route>
            </Routes>
          </div>
      </Router>
      </AlarmContext.Provider>
    </div>
  );
}

export default App;
