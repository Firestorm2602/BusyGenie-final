import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Timercomponent.css';
import * as AiIcons from 'react-icons/ai';
import { useContext , useState , useEffect , useRef } from 'react';
import SettingsContext from './SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timercomponent() {
    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);

    const [secondsLeft,setSecondsLeft]= useState(0);

    const [timerHeading, setTimerHeading] = useState(settingsInfo.timerName);

    const [mode, setMode] = useState('break'); //work/break/null

    const secondsLeftRef = useRef(secondsLeft);

    const isPausedRef = useRef(isPaused);

    const modeRef = useRef (mode);

    const initTimer= () =>{
        setSecondsLeft(settingsInfo.workMinutes*60)
    }

    const switchMode= () => {
        const nextMode = modeRef.current === 'work' ? 'break': 'work';
        const nextSeconds = (nextMode==='work'?settingsInfo.workMinutes*60: settingsInfo.breakMinutes*60)
        setMode(nextMode);
        modeRef.current= nextMode;
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current=nextSeconds;
        
    }

    const tick =()=> {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {
    initTimer();
    
    const interval = setInterval(() => {
        if(isPausedRef.current){
            return;
        }
        if (secondsLeftRef.current === 0){
            return switchMode();
        }
        tick();
    },1000);

    return () =>clearInterval(interval);
    }, [settingsInfo]);
    
    const totalSeconds= mode === 'work'? settingsInfo.workMinutes*60 : settingsInfo.breakMinutes*60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft/ 60);
    let seconds = (secondsLeft% 60);
    if(seconds<10) seconds = '0' + seconds;


    return (
    <div className='timer-container'>
        <div className='timer-name'>
            {timerHeading}
        </div>
        <CircularProgressbar className='timer-component' 
        value={percentage} 
        text={minutes + ':' + seconds} 
        styles={buildStyles({
            textColor:'rgba(0,0,0,0.9)',
            pathColor:mode === 'work' ? red: green,
            tailColor:'rgba(255,255,255,0.1)',
        })}/>
        <div className='play-pause-buttons'>
            {isPaused? 
            <AiIcons.AiFillPlayCircle size={75} color='#26474E' onClick={()=> {setIsPaused(false); isPausedRef.current=false}}/>
            :<AiIcons.AiFillPauseCircle size={75} color='#26474E' onClick={()=> {setIsPaused(true); isPausedRef.current=true}}/> }
        </div>
        <div className='timer-settings-button' onClick={()=> settingsInfo.setShowSettings(true)}>
        <AiIcons.AiFillSetting color='white' size={38} />
        Settings
        </div>
    </div>
    );
    
}

export default Timercomponent;
