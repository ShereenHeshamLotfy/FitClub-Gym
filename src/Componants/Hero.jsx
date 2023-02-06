import React from 'react';
import './Hero.css';
import Header from './Header';
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Calories from '../assets/calories.png'
import Heart from '../assets/heart.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
    const transition={type:'spring',duration:3};
    const mobile=window.innerWidth<=768 ? true:false;
    return (
        <div className="hero" id="Home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* Best ad */}
                <div className="the-best-ad">
                    <motion.div initial={{left:mobile? "168px":"238px"}} whileInView={{left:'8px'}} transition={{...transition,type :'tween'}}>

                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* Hero Heading */}
                <div className="the-hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                        <span></span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span><NumberCounter end={140} preFix="+" delay="4" start={10}></NumberCounter></span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} preFix="+" delay="4" start={800}></NumberCounter></span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} preFix="+" delay="4" start={0}></NumberCounter></span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* Hero buttons */}
                
                    <div className="hero-buttons">
                        <button className="btn">Get Started</button>
                        <button className="btn">Learn More</button>
                    </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>
                <motion.div initial={{right:"-1rem"}} whileInView={{right:"4rem"}} transition={transition} className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero_image"/>
                <motion.img initial={{right:"11rem"}} whileInView={{right:"20rem"}} transition={transition} src={hero_image_back} alt="" className='hero_image_back' ></motion.img>
                <motion.div initial={{right:"37rem"}} whileInView={{right:"28rem"}} transition={transition} className="calories">
                    <img src={Calories} alt="" />
                    <div> 
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero