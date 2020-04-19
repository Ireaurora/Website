import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';
import uniofYork from '../img/uniOfYork.png';
import bootham from '../img/bootham.png';

class Education extends Component {
    render() {
                return (
            <div className="condiv">
            <h1 className="subtopic" id="education"><span>Education</span></h1>
           
            <FlipCard title="Computer Science" where="University of York" from="2018" image={uniofYork} to="Present" educationLevel="Some modules" skills={['Operating Systems', 'Databases', 'Software project', 'User Research, Design and Experience','Complexity Theory','Hardware', 'Vision and Graphics' ]}/>
        
            <FlipCard title="A-Levels" where="Bootham School" from="2016" to="2018"  image={bootham} education="A-Levels" educationLevel="A-Levels" skills={['Maths', 'Further Maths', 'Chemistry', 'Physics', 'Italian', 'EPQ']}/>
           
            </div>
            )
        }
    }
    
export default Education
    