import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Join() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_78b9cls', 'template_u6lelek', form.current, '73sBK8AVuPTjiqdGw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });}
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">ready to</span>
                    <span>level up</span>
                </div>
                <div>
                    <span>your body</span>
                    <span className="stroke-text">with us?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail} >
                    <input type="email" name="user-email" placeholder="Enter your Email Address her" />
                    <button className="btn">Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join