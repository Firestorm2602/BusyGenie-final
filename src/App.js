import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className="site-container">
            <Routes>
              <Route path="/"  element={<Home/>}></Route>
              <Route path="/alarms" element={<Alarms/>}></Route>
              <Route path="/calendar" element={<Calendar/>}></Route>
              <Route path="/feedback" element={<Feedback/>}></Route>
              <Route path="/graphs" element={<Graphs/>}></Route>
              <Route path="/timer" element={<Timer/>}></Route>
              <Route path="/toDoList" element={<ToDoList/>}></Route>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
