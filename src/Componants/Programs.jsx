import React from 'react'
import './Programs.css';
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'
function Programs() {
    return (
        <div className="Programs" id="programs">
            {/* Programs Header */}
            <div className="programs-header">
                <span className ="stroke-text">EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className ="stroke-text">TO SHAPE YOU</span>
            </div>
            <div className="progrmes-cateogries">
            {programsData.map((programs)=>(
                <div className="category">
                    {programs.image}
                    <span>{programs.heading}</span>
                    <span>{programs.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                        </div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Programs