import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="contactMe">
            <h1 className="subtopic" id="contact"><span>Contact Me</span></h1>
            <p>Want to chat about something? </p>
            <Social />
            <p>Designed & Developer by Irene Sarigu</p>
            <p>Irene Sarigu @ 2020</p>
            </div>
            )
        }
    }
    
    export default Contact
    