import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {

    render() {
        return (

        <Navbar collapseOnSelect expand="lg" className="navbar navbar-fixed-top scrolling-navbar double-nav mobile-nofixed">
            <Navbar.Brand href="/">Irene Sarigu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                 <Nav.Link href="#about">About</Nav.Link>
                 <Nav.Link href="#education">Education</Nav.Link>
                 <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
        
            )
        }
    }
    
    export default Navigation
    