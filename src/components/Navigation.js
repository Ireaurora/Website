import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import $ from "jquery";

class Navigation extends Component {
    componentDidMount() {
        // Markup should load first
        console.log("hello");
        $('.navbar-links').click(function() {
            var sectionTo = $(this).attr('href');
            var offSet = $('#responsive-navbar-nav').height();
            var targetOffset = $(sectionTo).offset().top - offSet;
            $('html, body').animate({scrollTop:targetOffset}, 1500);
        });
      }
    render() {
        return (
        <Navbar id="navigationbar" collapseOnSelect expand="lg" className="navbar navbar-fixed-top scrolling-navbar double-nav mobile-nofixed">
            <Navbar.Brand href="/">Irene Sarigu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                 <Nav.Link className="navbar-links" href="#about">about</Nav.Link>
                 <Nav.Link className="navbar-links" href="#work">experience</Nav.Link>
                 {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
            </Nav>
            <Nav>
                <Nav.Link className="navbar-links" href="#education">education</Nav.Link>
                <Nav.Link  className="navbar-links" href="#contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
            )
        }
    }
    
    export default Navigation
    