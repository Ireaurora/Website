import React, { Component } from 'react';
import Navitem from './Navitem';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {

    render() {
        return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/">Irene Sarigu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                 <Nav.Link href="/About">About</Nav.Link>
                 <Nav.Link href="/Education">Education</Nav.Link>
                 <Nav.Link href="/Skills">Skills</Nav.Link>
                 <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        
            )
        }
    }
    
    export default Navigation
    