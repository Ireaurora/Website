import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';
import legend from '../img/legend.png';
import rbs from '../img/rbs.jpg';

class Work extends Component {
    render() {

        return (
            <div className="condiv">
            <h1 className="subtopic" id="work"><span>Experience</span></h1>
    
            <FlipCard title="Web Developer" where="Legend Club Managment System" from="Sept 2019" to="April 2020" image={legend} educationLevel="Skills" skills={['MVC','HTML','CSS & SASS','JS','TypeScript']} />
           
            <FlipCard title="Software Engineer Intern" where="Legend Club Managment System" from="July 2019" to="Sept 2019" image={legend}  educationLevel="Skills" skills={['MVC','HTML','CSS & SASS','JS','TypeScript']}/>

            <FlipCard title="Software Engineer Intern" where="Royal Bank of Scotland" from="April 2019" to="April 2019" image={rbs} educationLevel="Skills" />

            </div>
            )
        }
    }

    export default Work
    