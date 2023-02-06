import React from 'react'
import './Plans.css'
import {plansData} from '../data/plansData'
import whiteTick from '../assets/whiteTick.png'
function Plans() {
    return (
        <div className="Plans" id="plans">
            <div className="blur plan-blur1"></div>
            <div className="blur plan-blur2"></div>
            {/* Plans Header */}
            <div className="plans-header">
                <span className ="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className ="stroke-text">NOW WITH US</span>
            </div>
            <div className="plans-categories">
                {plansData.map((plans)=>(
                    <div className="plan-category">
                        {plans.icon}
                        <span>{plans.name}</span>
                        <span>$ {plans.price}</span>
                        <div className="features">
                            {plans.features.map((feature)=>(
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits -{'>'}</span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans