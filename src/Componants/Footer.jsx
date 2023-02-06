import React from 'react'
import './Footer.css'
import Linkedin from '../assets/linkedin.png'
import Logo from '../assets/logo.png'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'
function Footer() {
    return (
        <div className="Footer-Container">
            <hr />
            <div className="footer">
                <div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkedin} alt="" />
                </div>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur footer-blur1"></div>
            <div className="blur footer-blur2"></div>
        </div>
    )
}

export default Footer