import { Component } from "react";

export default class PlanetDetail extends Component {
  state = {
    planet: {}
  }
  componentDidMount() {
    let planets = [...this.props.planets]
    let uid = this.props.match.params.id

    let index = planets.findIndex((item) => {
      return uid == item.id
    })
    if (index !== -1) {
      this.setState({
        planet: planets[index]
      })
    }


  }
  render() {
    const { planet } = this.state
    // console.log(this.state.planet)
    // console.log(this.props)
    return (
      <div>
        <h1>
          Planet Detail
          name:{planet.name}
        </h1>
        <h2>
          color:{planet.color}
        </h2>
      </div >
    )
  }
}