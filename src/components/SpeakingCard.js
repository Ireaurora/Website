import React, { Component } from 'react'

class SpeakingCard extends Component {
  render() {
        return (
            <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <p className="title">{this.props.title}</p>
              <p> @ </p>
              <p className="where">{this.props.where}</p>
              <img className="flip-card-image" src={this.props.image}></img>
               <p className="date">{this.props.date} {this.props.time} </p>
              </div>
              <div className="flip-card-back">
                <p>Abstract: </p>
                <p id="back">{this.props.abstract}</p>
              </div>
            </div>
          </div>
            )
        }
    }

export default SpeakingCard
    