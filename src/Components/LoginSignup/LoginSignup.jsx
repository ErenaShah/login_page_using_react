import React from 'react';
import './LoginSignup.css';
import { useState } from "react";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    return (
        <div>
            <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
            </div>
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : <div className='input'>
                    <img src={user_icon} alt=''></img>
                    <input type='text' placeholder='Name'></input>
                </div>}
                <div className='input'>
                    <img src={email_icon} alt=''></img>
                    <input type='email' placeholder='xyz@gmail.com'></input>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''></img>
                    <input type='password' placeholder='password'></input>
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
            <div className='submit-container'>
                <div className={action === "Login" ? "Submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "Submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
            <div className="outer-circle-1"></div>
            <div className="outer-circle-2"></div>
        </div>
        </div>
    );
}

export default LoginSignup;
