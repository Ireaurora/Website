import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['something','something','something','something']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic" id="skills"><span>My Skills</span></h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <ul></ul>
            </div>
            )
        }
    }
    
    export default Skills
    