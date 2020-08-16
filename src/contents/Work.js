import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';
import legend from '../img/legend.png';
import rbs from '../img/rbs.png';
import internshipuk from '../img/InternshipUK.png';
import uniOfYork from '../img/uniOfYork.png';

class Work extends Component {
    render() {

        return (
            <div className="condiv">

            <h1 className="subtopic" id="Experience"><span>Experience</span></h1>

            <FlipCard title="AI and Computer Vision Research Intern" where="University of York" from="August 2020" to="September 2020" image={uniOfYork} educationLevel="Experiences :" skills={['In progress']}/>

            <FlipCard title="Software Engineer Intern" where="Royal Bank of Scotland" from="June 2020" to="August 2020" image={rbs} educationLevel="Experiences :" skills={['In progress']}/>
    
            <FlipCard title="Technology Intern" where="Internship Experience UK" from=" 30 June 2020" to="2 July 2020" image={internshipuk} educationLevel="Talks and Project :" skills={['Google : Managing Complexity', 'Accenture : Introduction to Technology', 'Goldman Sachs :  Verification and Testing', 'Bloomberg : Communication and collaboration', 'Vodafone : Agile Software Development', 'Project : TBA']}/>

            <FlipCard title="Web Developer" where="Legend Club Managment System" from="Sept 2019" to="April 2020" image={legend} educationLevel="Skills developed : " skills={['MVC','HTML','CSS & SASS','JavaScript','Accessibility Group' ,'TypeScript','Training Code Academy Developers','Agile Environment']} />
           
            <FlipCard title="Software Engineer Intern" where="Legend Club Managment System" from="July 2019" to="Sept 2019" image={legend}  educationLevel="Skills developed :" skills={['MVC','HTML','CSS & SASS','JavaScript','Accessibility Group', 'TypeScript','Training Code Academy Developers','Photoshop','Agile Environment']}/>

            <FlipCard title="Software Engineer Intern" where="Royal Bank of Scotland" from="April 2019" to="April 2019" image={rbs} educationLevel="Experiences :" skills={['Networking', 'Agile Environment', 'Introduction to the business', 'Introduction to the Security team', 'Introduction to the Architecture team', 'Introduction to the AI team',]}/>

            </div>
            )
        }
    }

    export default Work
    