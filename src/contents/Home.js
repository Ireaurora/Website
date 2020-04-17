import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import picture from '../img/irene.png';
import Social from '../components/Social';
import Education from '../contents/Education';
import Skills from '../contents/Skills';
import Work from '../contents/Work';
import Contact from '../contents/Contact';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={picture} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['while(true){ shuffle(Developer 💻, Speaker 👩🏼‍💻, Student 📚, Designer ✏️); }']} speed={100} eraseDelay={250000}/>
            <Social />
            <Work />
            <Education />
            <Contact />
            </div>
            )
        }
    }
    
    export default Home
    