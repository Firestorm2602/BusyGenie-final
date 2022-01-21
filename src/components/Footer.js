import React from 'react';
import './Footer.css';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const Footer =({color})=> {
    return (
        <div className='footer-container'>
            
            <div className='waves-bottom'>
                <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150" preserveAspectRatio="none" >
                    <path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    class="shape-fill" 
                    fill='white'
                    fill-opacity="1">
                    </path>
                </svg>
            </div>
            <div className='footer'>
                <div className='footer-list'>
                    <div className='footer-left'>
                        <div className='footer-item'><AiIcons.AiFillGithub size={45} /> Github repository</div>
                        <div className='footer-item'><IoIcons.IoMdContact size={45}/>Contacts</div>
                    </div>
                    <div className='footer-title'>BusyGenie</div>
                    <div className='footer-right'>
                        <div className='footer-item'><AiIcons.AiOutlineLink size={45} />Linktree</div>
                        <div className='footer-item'><IoIcons.IoIosChatboxes size={45}/>Feedback</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
