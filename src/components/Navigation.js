import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import $ from "jquery";

class Navigation extends Component {
    componentDidMount() {
        // Markup should load first
        $('.navbar-links').click(function() {
            var sectionTo = $(this).attr('href');
           var offSet = $('#responsive-navbar-nav').height();
           var targetOffset = $(sectionTo).offset().top - offSet;
            $('html, body').animate({scrollTop:targetOffset + "px"}, 1500);
        });
      }
    render() {
        return (
        <Navbar id="navigationbar" collapseOnSelect expand="lg" className="navbar navbar-fixed-top scrolling-navbar double-nav mobile-nofixed">
            <Navbar.Brand href="/">Irene Sarigu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                {/*
                 <Nav.Link href="#About">About</Nav.Link>
                 <Nav.Link className="navbar-links" href="/#Experience">Experience</Nav.Link>
                 <Nav.Link className="navbar-links" href="/#Education">Education</Nav.Link>
                <Nav.Link  className="navbar-links" href="/#Contact">Contact</Nav.Link>
                 {/* <Nav.Link href="#skills">Skills</Nav.Link> */}
            </Nav>
              <Nav>
                <Nav.Link href="/irenecodes/">Speaking</Nav.Link>
              </Nav> 
            </Navbar.Collapse>
            </Navbar>
            )
        }
    }
    
    export default Navigation
    