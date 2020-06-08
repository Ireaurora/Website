import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import uniofYork from '../img/uniOfYork.png';
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
            
            <div className="CodeCards">
            <h1 className="subtopic" id="JavaScript"><span>JavaScript</span></h1>
            <CardDeck>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
            </CardDeck>
            <h1 className="subtopic" id="Python"><span>Python</span></h1>
            <CardDeck>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
            </CardDeck>
            <h1 className="subtopic" id="Java"><span>Java</span></h1>
            <CardDeck>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
            </CardDeck>
            <p id="message">This page highlight only some of my projects! Find more on my <a href="https://github.com/Ireaurora" target="_blank"><i className="fab fa-github"></i></a> page!</p>
        </div>
        <Contact />
        </div>
            )
        }
    }
    
    export default CodeProject