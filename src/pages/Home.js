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
                <svg className='waves-top-svg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 110" preserveAspectRatio="none" >
                    <path  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                    class="shape-fill" 
                    fill="#f0f8ff" 
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
