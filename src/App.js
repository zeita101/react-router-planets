import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home'
import Planets from './components/Planets'
import PlanetDetails from './components/PlanetDetail';
import RandomPlanet from './components/RandomPlanet';
import { Component } from 'react';
import axios from 'axios';



class App extends Component() {
  state = {
    planets: []
  }
  componentDidMount() {
    axios.get('https://wdi-nyc-planets-api.herokuapp.com/planets')
      .then((res) => this.setState({ planets: res.data.planets }))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/planets">Planets</Link>
            </li>
          </nav>

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/planets" component={() => <Planets {...this.props} planets={this.state.planets} />} />
            <Route path="/planets/Details:id" component={() => <PlanetDetails {...this.props} planets={this.state.planets} />} />

          </main>
        </div>

      </BrowserRouter>
    );
  }
}
// import {render} from '@testing-library/react';

export default App;