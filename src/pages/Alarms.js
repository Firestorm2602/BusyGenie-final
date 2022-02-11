import React, {useContext, useState} from 'react'
import './Alarms.css';
import AlarmContext from '../components/AlarmContext';


function Alarms() {
    const alarmInfo = useContext (AlarmContext);
    const [newAlarm, setNewAlarm] = useState({name:"alarm", date:"", time:"", id: ""});
    function handleAddAlarm(e){
        e.preventDefault();
        newAlarm.id=Math.floor(Math.random()*100000);
        alarmInfo.setAlarmArray([...alarmInfo.alarmArray, newAlarm]);
    }
    
    function handleDelAlarm(e){
        let newAlarmArray=alarmInfo.alarmArray;
        newAlarmArray= alarmInfo.alarmArray.filter(el => el.id !== e);
        console.log(newAlarmArray)
        
        // alarmInfo.setAlarmArray(alarmInfo.alarmArray.filter(el => el.id !== e));
        // console.log("an alarm has been deleted");
    }

    return (
        <form className='alarms'>
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
            <button type ="submit" className='submit-alarm' onClick={handleAddAlarm}>Add Alarm</button>

            {alarmInfo.alarmArray.map((item,i)=>{
                            return(
                                <div className='alarm-display'>
                                    <div>{item.name}</div>
                                    <button type = "button" className='delete-alarm' 
                                    onClick={handleDelAlarm(item.id)}
                                    >delete button</button>
                                </div>
                            );
                        })}
        </form>
        
    )
}

export default Alarms
