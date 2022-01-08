import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Alarms',
        path: '/alarms',
        icon: <IoIcons.IoMdAlarm/>,
        cName: 'nav-text'
    },
    {
        title: 'To-Do list',
        path: '/toDoList',
        icon: <IoIcons.IoIosCheckmarkCircleOutline/>,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <IoIcons.IoIosCalendar/>,
        cName: 'nav-text'
    },
    {
        title: 'Timer',
        path: '/timer',
        icon: <IoIcons.IoIosTimer/>,
        cName: 'nav-text'
    },
    {
        title: 'Graphs',
        path: '/graphs',
        icon: <IoIcons.IoIosTrendingUp/>,
        cName: 'nav-text'
    },
    {
        title: 'Feedback',
        path: '/feedback',
        icon: <IoIcons.IoIosChatboxes/>,
        cName: 'nav-text'
    }
]