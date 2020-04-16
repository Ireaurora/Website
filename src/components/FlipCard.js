import React, { Component } from 'react'

class FlipCard extends Component {
  constructor(props)
    {
        super(props);
        this.state={
            'new': this.props.myskills
        };
       //this.state.new.map(x => console.log(x));
       //console.log(this.state.new);
      // {console.log(this.state.new)}
    }
    render( 
    ) {
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
                
                <ul>
          
                </ul>
              </div>
            </div>
          </div>
            )
        }
    }

export default FlipCard
    