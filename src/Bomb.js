// your Bomb code here!
import React from 'react'



class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  // countdown = () => {
  //   debugger
  //   setInterval(function(){this.setState({
  //     secondsLeft: this.state.secondsLeft - 1
  //   })}, 1000)
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('load', this.countdown())
  // }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    return (
      <div>{message}</div>
    )

    //
    // if (this.state.secondsLeft !== 0) {
    //   return (
    //     <div>
    //     {this.state.secondsLeft} seconds left before I go boom!
    //     </div>
    //   )
    //   else {
    //     return <div>Boom!</div>
    //   }
    // }
    // return (
    //   `${secondsLeft} seconds left before I go boom!`
    // )
  }
}

export default Bomb
