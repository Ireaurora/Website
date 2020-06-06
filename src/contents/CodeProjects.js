import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import uniofYork from '../img/uniOfYork.png';
import CodeProj from '../components/CodeProj';
import Contact from '../contents/Contact';

class CodeProject extends Component {
    render() {
        return (
            <div className="condiv">
            <div className="CodeCards">
            <CardDeck>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
                <CodeProj image={uniofYork} title="" when="" codeurl="" liveurl="" text=""/>
            </CardDeck>
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