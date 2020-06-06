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
                <Dropdown.Item href="#/action-1">L1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">L2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L3</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <div className="CodeCards">
            <h1 className="subtopic" id=""><span></span></h1>
            <CardDeck>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
            </CardDeck>
            <h1 className="subtopic" id=""><span></span></h1>
            <CardDeck>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
            </CardDeck>
        </div>
        <Contact />
        </div>
            )
        }
    }
    
    export default CodeProject