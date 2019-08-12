import React, { Component } from 'react'

const withCoordinates = (Comp) => class Coordinates extends Component {

  state = {
    location: ''
  }

  componentDidMount() {
    navigator.geolocation.watchPosition((location) => {
      this.setState({
        location
      })
    })
  }

  render() {
    
    return (
      <div>
        <Comp location={this.state.location}/>
      </div>
    )
  }
}

export default withCoordinates
