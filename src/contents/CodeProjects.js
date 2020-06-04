import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import uniofYork from '../img/uniOfYork.png';
import CodeProj from '../components/CodeProj';

class CodeProject extends Component {
    render() {
        return (
        <div className="CodeProjects">
            <CardDeck>
                <CodeProj title="P1" when="2018" image={uniofYork} text="Some modules" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij"/>
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij"/>
                <CodeProj title="P1" when="2018" image={uniofYork} text="Some modules" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij"/>

            </CardDeck>
            <CardDeck>
                <CodeProj title="P1" when="2018" image={uniofYork} text="Some modules" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij" />
                <CodeProj title="P1" when="2018" image={uniofYork} text="Some modules" />
                <CodeProj title="Computer Science" when="2018" image={uniofYork} text="Some modules" name="jij"/>
            </CardDeck>
        </div>
            )
        }
    }
    
    export default CodeProject