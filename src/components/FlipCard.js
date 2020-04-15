import React, { Component } from 'react'

class FlipCard extends Component {
    render() {
        return (
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <p>{this.props.title}</p>
              <p> @ </p>
              <p>{this.props.where}</p> 
              <img src={this.props.image} class="flip-card-image"/>
               <p>{this.props.from} - {this.props.to}</p>
              </div>
              <div class="flip-card-back">
                <p>{this.props.education}</p>
              </div>
            </div>
          </div>
            )
        }
    }
    
export default FlipCard
    