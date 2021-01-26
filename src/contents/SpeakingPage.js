import React, { Component } from 'react';
import SpeakingCard from '../components/SpeakingCard';
import ReactTypingEffect from 'react-typing-effect';
import picture from '../img/irene.png';
import uniofYork from '../img/uniOfYork.png';
import Contact from '../contents/Contact';
import Social from '../components/Social';
import techfest from '../img/techfest.png';
import PHPYorkshire from '../img/phpyorkshire.png';
import leedsphp from '../img/leedsphp.png';
import phpoxford from '../img/phpoxford.jpg';
import dotnetsheff from '../img/dotnetsheff.png';

class SpeakingPage extends Component {
    render() {
        return (
            <div className="condiv home" id="About">
                <img src={picture} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['while(true){ shuffle(Developer 💻, Speaker 👩🏼‍💻, Student 📚, Designer ✏️); }']} speed={100} eraseDelay={250000}/>
                <Social />
                <h1 className="subtopic" id="2021"><span>2021</span></h1>

                <div className = "centering">

                <SpeakingCard title="TBA" where="dotnettsheff" date="Tue 2nd March" time ="at 6:30pm" image={dotnetsheff}  abstract="TBA"/>

                <SpeakingCard title=" How Are We Teaching Machines to Learn?" where="PHP Oxford" date="Wed 27th Jan" time ="at 7:30pm" image={phpoxford}  abstract="In this talk we’ll understand why AI isn’t really the same as ML, investigate different types of Machine Learning and take a look at some applications of this exciting field"/>

                
                
                <h1 className="subtopic" id="Past"><span>Past</span></h1>

                <SpeakingCard title=" How Are We Teaching Machines to Learn?" where="PHP Leeds" date="18/11/2020" time ="at 7:00pm" image={leedsphp}  abstract="In this talk we’ll understand why AI isn’t really the same as ML, investigate different types of Machine Learning and take a look at some applications of this exciting field"/>

                <SpeakingCard title="Event Host" where="PHPYorkshire Conference" date="TBC" time ="" image={PHPYorkshire}  abstract="Come and join us for a chance to enhance your skills with some quality learning from some of the best people in the PHP community, whilst set in an idyllic location."/>

                <SpeakingCard title="How to Start Coding" where="YorkTechFest" date="2019" time ="" image={techfest}  abstract=" In this talk you’ll discover a range of resources that you can use to get started or improve your coding skills."/>
                </div>
                <Contact />
            </div>
        )
    }
}

export default SpeakingPage
