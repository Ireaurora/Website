import React, { Component } from 'react'

class FlipCard extends Component {
    render() {
      const List= (props) => {
        if(props.tasks != undefined){
          return props.tasks.map(skill=>
              <li>{skill}</li>) }
          else{
            return <p>This experience was extremely valuable to me and taught me so much.</p>
        }
      };
        return (
            <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <p className="title">{this.props.title}</p>
              <p> @ </p>
              <p className="where">{this.props.where}</p> 
              <img src={this.props.image} className="flip-card-image"/>
               <p className="date">{this.props.from} - {this.props.to}</p>
              </div>
              <div className="flip-card-back">
              <List tasks= {this.props.skills} />
              </div>
            </div>
          </div>
            )
        }
    }

export default FlipCard
    