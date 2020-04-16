import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';

class Education extends Component {
    render() {
                return (
            <div className="condiv">
            <h1 className="subtopic" id="education"><span>My Education</span></h1>
            <FlipCard title="Computer Science" where="University of York" from="2018" to="Present" educationLevel="Modules"/>
            <FlipCard title="A-Levels" where="Bootham School" from="2016" to="2018" education="A-Levels" educationLevel="A-Levels" skills={['Maths', 'Further Maths', 'Chemistry', 'Physics', 'Italian', 'EPQ']}/>
            </div>
            )
        }
    }
    
export default Education
    