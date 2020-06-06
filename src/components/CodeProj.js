import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class CodeProj extends Component {
    render() {
        return (
            <Card>
              <Card.Img className="Cardimage" variant="top" src={this.props.image}/>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.text}</Card.Text>
                <Button className="card_button" variant="primary"><a href={this.props.codeurl}>Code</a></Button>
                <Button className="card_button" variant="primary"><a href={this.props.liveurl}>Live</a></Button>
              </Card.Body>
              <Card.Footer>
                  <p id="small">Developed in ~> {this.props.when}</p>
              </Card.Footer>
            </Card>
        )
        }
    }
    
export default CodeProj