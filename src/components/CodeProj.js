import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class CodeProj extends Component {
    render() {
        return (
            <Card>
              <Card.Img className="Cardimage" variant="top" src={this.props.image} />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.text}</Card.Text>
                <a href="https://ireaurora.github.io/Temperature_converter/" target="_blank" className="btn btn-primary card_button">Github Repo</a>
                <a href="https://ireaurora.github.io/Temperature_converter/" target="_blank" className="btn btn-primary card_button">{this.props.name}s</a>
              </Card.Body>
              <Card.Footer>
                  <p>Developed in ~> {this.props.when}</p>
              </Card.Footer>
            </Card>
        )
        }
    }
    
export default CodeProj