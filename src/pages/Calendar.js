import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CalendarMain.css'

const locales = {
    "en-IN": require("date-fns/locale/en-IN"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "BigMeeting",
        start: new Date(2022,1,1),
        end: new Date(2022,1,2),
    },
    {
        title: "Vacation",
        start: new Date(2022,1,1),
        end: new Date(2022,1,3),
    },
    {
        title: "Conference",
        start: new Date(2022,1,1),
        end: new Date(2022,1,1),
    }
]

function CalendarMain(){

    const [ newEvent, setNewEvent ] = useState({ title: "", start: "", end: ""});
    const [ allEvents, setAllEvents ] = useState(events);

    function handleAddEvent(){
        setAllEvents([...allEvents, newEvent]);
    }
    return(
        <div className='big-container'>
                <div className='calendar-heading'>
                    <h1>Calendar</h1>
                    <h2>Add event</h2>
                    <div className="add-event">
                        <input className="event-input" type="text" placeholder="Add Title" value={newEvent.title} 
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
                        <DatePicker className="event-input" placeholderText="Start Date" selected={newEvent.start} 
                        onChange={(start) => setNewEvent({...newEvent, start})} />
                        <DatePicker className="event-input" placeholderText="End Date" selected={newEvent.end} 
                        onChange={(end) => setNewEvent({...newEvent, end})} />
                        <button className="add-event-button" onClick={handleAddEvent}>Add Event</button>
                    </div>
                </div>
                <div className='calendar-component'>
                    <Calendar className="final-calendar" localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"/>
                    
                </div>
            </div>
    )
}

export default CalendarMain;