import React, { Component } from 'react';

class CodeProj extends Component {
    render() {
        return (

          <div className="col mb-4">
          <div className="card h-100">
            <img src={this.props.image} className="card-img-top" alt="Playing with CSS and JS" />
            <div className="card-body">
              <h5 className="card-title variables"><a className="variables" href="Variables/Variables.html">{this.props.title}</a></h5>
              <p className="card-text">
              {this.props.text}
              </p>
            </div>
            <div class="card-footer">
            <small class="text-muted">Developed in {this.props.when}</small>
            </div>
          </div>
        </div>
        )
        }
    }
    
export default CodeProj