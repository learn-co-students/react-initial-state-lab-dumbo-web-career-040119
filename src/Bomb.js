import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }



  render() {
    console.log(this.state.secondsLeft)
    return this.state.secondsLeft > 0 ?
    <p>{this.state.secondsLeft} seconds left before I go boom!</p> :
    <p>Boom!</p>
  }
}
