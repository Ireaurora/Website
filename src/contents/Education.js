import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <FlipCard title="Computer Science" where="University of York" from="2018" to="Present" education="8"/>
            <FlipCard title="A-Levels" where="Bootham School" from="2016" to="2018" education="A-Levels"/>

            </div>
            )
        }
    }
    
export default Education
    