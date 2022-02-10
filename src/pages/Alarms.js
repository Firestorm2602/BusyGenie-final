import React, {useContext, useState} from 'react'
import './Alarms.css';
import AlarmContext from '../components/AlarmContext';


function Alarms() {
    const alarmInfo = useContext (AlarmContext);
    const [newAlarm, setNewAlarm] = useState({name:"", date:"", time:""});
    function handleAddAlarm(){
        alarmInfo.setAlarmArray([...alarmInfo.alarmArray, newAlarm]);
    }
    return (
        <div className='alarms'>
            set an alarm
            <input id="enter-alarm-name" type= "text"
                onChange={newValue => setNewAlarm({...newAlarm, name:newValue.target.value})}    
            >
            </input>
            <input id="enter-alarm-date" type="Date"
                onChange={newValue => setNewAlarm({...newAlarm,date:newValue.target.value})}
            >
            </input>
            <input id="enter-alarm-time" type="Time"
                onChange={newValue => setNewAlarm({...newAlarm,time:newValue.target.value})}
            >
            </input>
            <button className='submit-alarm' onClick={handleAddAlarm}>Add Alarm</button>

            {alarmInfo.alarmArray.map((item, i)=>{
                            return(
                                <div>{item.name}</div>
                            );
                        })}
        </div>
        
    )
}

export default Alarms
