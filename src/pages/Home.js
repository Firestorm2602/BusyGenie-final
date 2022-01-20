import React from 'react';
import Footer from '../components/Footer';
import './Home.css';



function Home() {
    return (
        <div className='home'>
            <div className='home-page-top' >
                <div className='home-page-top-title'>BusyGenie</div>
                    <p className='home-page-top-desc'>The only productivity app you will ever need</p>
            </div>
            <div className='waves-top'>
                <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150" preserveAspectRatio="none" >
                    <path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    class="shape-fill" 
                    fill="#FFFFFF" 
                    fill-opacity="1">
                    </path>
                </svg>
            </div>
            <div className='home-page-features'>
                <div className='features-heading'>
                    FEATURES :
                </div> 
                <div className='features-container'>
                    <div className='features-card'>
                        <div className='features-card-heading'>
                            To-Do List
                        </div>
                    </div>
                    <div className='features-card'>
                        <div className='features-card-heading'>
                            Alarms
                        </div>
                    </div>
                    <div className='features-card'>
                        <div className='features-card-heading'>
                            Calendar
                        </div>
                    </div>
                    <div className='features-card'>
                        <div className='features-card-heading'>
                            Timer
                        </div>
                    </div>
                    <div className='features-card'>
                        <div className='features-card-heading'>
                            Graphs
                        </div>
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-top-1642579492-reverse">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='home-page-dev'>
                <div className='dev-heading'>
                    DEVELOPERS :
                </div>
                <div className='dev-container'>
                    <div className='dev-card'>
                        <img className='dev-photo' alt="dev" src={require("./himshikhar.jpg")}></img>
                        <p className='dev-name'>Himshikhar Singh</p>
                    </div>
                    <div className='dev-card'>
                        <img className='dev-photo' alt="dev" src={require("./himshikhar.jpg")}></img>
                        <p className='dev-name'>Dheeraj Kumar</p>
                    </div>
                    <div className='dev-card'>
                        <img className='dev-photo' alt="dev" src={require("./himshikhar.jpg")}></img>
                        <p className='dev-name'>Siddhant Salve</p>
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-top-1642579492">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
