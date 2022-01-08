import React, {useState} from 'react';
import Star from "./Star";
import './Form.css';


function Form(){
    const handleSubmit = event => {
        event.preventDefault();
        alert('Thank you for your feedback!')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="header">
                    <h1>Feedback</h1>
                    
                </div>
                <div className="name">
                <label >
                    Name
                </label>
                <p><input type="text" name="name" /></p>
                </div>
                <div className="e-mail">
                <label>
                    Email
                    <p><input type="text" name="email" /></p>
                </label>
                </div>
                <div className="starxo">
                <lable>
                    <b>How would like to rate our website:</b>
                </lable>
                </div>
                <div>
                    <Star/>
                </div>
                <div className="message">
                <label>
                    Message
                    <textarea placeholder='Your feedback here . . . '></textarea>
                </label>
                </div>
                <div className="submit">
                    <input type="submit" value="SUBMIT" />
                </div>
            </div>
        </form>
    )
}

export default Form;