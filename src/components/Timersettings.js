import React from 'react';
import ReactSlider from 'react-slider';
import {useContext} from 'react';
import SettingsContext from './SettingsContext';
import * as AiIcons from 'react-icons/ai';


function Timersettings() {
    const settingsInfo = useContext(SettingsContext);
    return (
        <div className='timer-settings'>
            <label>work minutes: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
            className='slider'
            thumbClassName='thumb'
            trackClassName='track'
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
            <label>break minutes: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
            className='slider green'
            thumbClassName='thumb green'
            trackClassName='track'
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />
            <div className='go-back-button' onClick={()=> settingsInfo.setShowSettings(false)}>
                <AiIcons.AiFillLeftCircle size={50}/>
                <span>Back</span>
            </div>
        </div>
    );
}

export default Timersettings;
