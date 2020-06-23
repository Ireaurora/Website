import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import image from '../img/uniOfYork.png';
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
                <CodeProj image={image} title="Tip Calculator" when="~> 2019" codeurl="https://github.com/Ireaurora/tip_calculator" liveurl="https://ireaurora.github.io/tip_calculator/index.html" text="This tool was created for restaturants and cafes"/>
                <CodeProj image={image} title="" when="" codeurl="" liveurl="" text=""/>
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