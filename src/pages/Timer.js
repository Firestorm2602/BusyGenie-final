import React, {useState} from 'react'
import './Timer.css';
import Timercomponent from '../components/Timercomponent';
import Footer from '../components/Footer';
import Timersettings from '../components/Timersettings';
import SettingsContext from '../components/SettingsContext';


function Timer() {

    const[showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(25);
    const [breakMinutes, setBreakMinutes] = useState(5);

    return (
        <div className='timer'>
            <SettingsContext.Provider value={{
                workMinutes ,
                breakMinutes ,
                setWorkMinutes,
                setBreakMinutes,
                showSettings,
                setShowSettings,
            }}>
            {showSettings ? <Timersettings/> : <Timercomponent/> }
            </SettingsContext.Provider>
            <Footer/>
        </div>
    )
}

export default Timer
