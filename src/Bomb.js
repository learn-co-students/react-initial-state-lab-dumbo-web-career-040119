// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return (
            <div>
                {this.state.secondsLeft === 0 ?
                <h4>Boom!</h4> :
                <h4>{this.state.secondsLeft} seconds left before I go boom!</h4>}
            </div>
        )
      }
    } 
