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
                <CodeProj title="P1" when="2018" image={uniofYork} text="Some modules" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij"/>
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij"/>
            </CardDeck>
            <CardDeck>
                <CodeProj title="P1" when="2018" image={uniofYork} text="Some modules" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij" />
            </CardDeck>
        </div>
        <Contact />
        </div>
            )
        }
    }
    
    export default CodeProject