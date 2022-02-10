import React, {useState} from 'react'
import './Timer.css';
import Timercomponent from '../components/Timercomponent';
import Footer from '../components/Footer';
import Timersettings from '../components/Timersettings';
import SettingsContext from '../components/SettingsContext';


function Timer() {

    const [showSettings, setShowSettings] = useState(true);
    const [workMinutes, setWorkMinutes] = useState(25);
    const [breakMinutes, setBreakMinutes] = useState(5);
    const [timerName, setTimerName] = useState("Timer");

    return (
        <div className='timer'>
            <SettingsContext.Provider value={{
                workMinutes ,
                breakMinutes ,
                setWorkMinutes,
                setBreakMinutes,
                showSettings,
                setShowSettings,
                timerName,
                setTimerName,
            }}>
            {showSettings ? <Timersettings/> : <Timercomponent/> }
            </SettingsContext.Provider>
            <Footer/>
        </div>
    )
}

export default Timer
