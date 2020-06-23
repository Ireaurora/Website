import React, { Component } from 'react';
import image from '../img/uniOfYork.png';
import jschallenge from '../img/projects/jschallenge.png';
import ballgame from '../img/projects/ballgame.png';
import CodeProj from '../components/CodeProj';
import Contact from '../contents/Contact';
import Dropdown from 'react-bootstrap/Dropdown';

class CodeProject extends Component {
    render() {
        return (
            <div className="condiv">
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">Developed in: </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#JavaScript">JavaScript</Dropdown.Item>
                <Dropdown.Item href="#Python">Python</Dropdown.Item>
                <Dropdown.Item href="#Java">Java</Dropdown.Item>
                <Dropdown.Item href="#message">More Projects</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <h1 className="subtopic" id="JavaScript"><span>JavaScript</span></h1>
            <div class="content">
            <div class="row row-cols-1 row-cols-md-3">
                <CodeProj image={jschallenge} title="JavaScript 30 Challenge" when="~> 2020" codeurl="https://github.com/Ireaurora/JavaScript30" liveurl="https://ireaurora.github.io/JavaScript30/index.html" text="I'm currently working on this challenge. So far I've revised ES6, AJAX and the DOM and I've completed 20% of the challenge!"/>
                <CodeProj image={ballgame} title="Breakout Bricks Game" when="~> 2018" codeurl="https://github.com/Ireaurora/ballgame_js" liveurl="https://ireaurora.github.io/ballgame_js/" text="I developed this game a few years ago following a tutorial using mainly js"/>
                <CodeProj image={image} title="" when="" codeurl="" liveurl="" text=""/>
            </div>
            </div>
            <h1 className="subtopic" id="Python"><span>JavaScript</span></h1>
            <div class="content">
            <div class="row row-cols-1 row-cols-md-3">
                <CodeProj image={image} title="Tip Calculator" when="~> 2019" codeurl="https://github.com/Ireaurora/tip_calculator" liveurl="https://ireaurora.github.io/tip_calculator/index.html" text="This tool was created for restaturants and cafes"/>
                <CodeProj image={image} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={image} title="" when="" codeurl="" liveurl="" text=""/>
            </div>
            </div>
        <Contact />
        </div>
            )
        }
    }
    
    export default CodeProject