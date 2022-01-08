import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

function Navbar() {
    const [sidebar, setSidebar]=useState(false);
    const [auth, setAuth]=useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);
    const authenticate = ()=> setAuth(!auth);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-bars" onClick={showSidebar}>
                        <FaIcons.FaBars />
                    </div>
                </div>
                <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle navbar-cross' onClick={showSidebar}>
                            <Link to = "#" className='menu-bars nav-item ' >
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SidebarData.map((item, i)=>{
                            return(
                                <Link to={item.path}>
                                    <li key={i} className ={item.cName} onClick={showSidebar}>
                                        <div className="nav-menu-item">
                                            <span className='nav-item-title'>
                                                {item.title}
                                            </span>
                                            <div className='nav-item-logo'>
                                                {item.icon}
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            );
                        })}
                        {/* <li className='nav-item-title  nav-menu-item'>
                            <button className={auth? 'button-48': 'active button-48'} role="button">
                                <span className="text">
                                    Log In
                                </span>
                            </button>
                            <button className={auth? 'button-48': 'active button-48'} role="button">
                                <span className="text">
                                    Sign Up
                                </span>
                            </button>
                            <button className={auth? 'button-48 active': 'button-48'} role="button">
                                <span className="text">
                                    Sign Out
                                </span>
                            </button>
                        </li> */}
                    </ul>
                </nav>
                <Link to = "/">
                    <div className='nav-menu-title'>
                        BusyGenie
                    </div>
                </Link>
                <div className='nav-menu-auth'>
                <button className={auth? 'button-48': 'active button-48'} >
                    <span className="text">
                        Log In
                    </span>
                </button>
                <button className={auth? 'button-48': 'active button-48'} >
                    <span className="text">
                        Sign Up
                    </span>
                </button>
                <button className={auth? 'button-48 active': 'button-48'} >
                    <span className="text">
                        Sign Out
                    </span>
                </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
