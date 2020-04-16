import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';


class Work extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic" id="work"><span>Work</span></h1>
    
            <FlipCard title="Web Developer" where="Legend Club Managment System" from="Sept 2019" to="April 2020" image="" myskills="[HTML','CSS','JS','PHP']"/>
           
            <FlipCard title="Software Engineer Intern" where="Legend Club Managment System" from="July 2019" to="Sept 2019" image=""/>

            <FlipCard title="Software Engineer Intern" where="Royal Bank of Scotland" from="April 2019" image=""/>

            </div>
            )
        }
    }

    export default Work
    