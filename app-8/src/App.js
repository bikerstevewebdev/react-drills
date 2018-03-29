import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: []
    }
    
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      console.log(res.data)
      this.setState({
        pokemon: res.data.results
      })
    })
  }


  render() {
    let pokemonDisplay = this.state.pokemon.map((char, i) => <h2 key={i}>{char.name}</h2>)
    return(
      <div className="App">
        {pokemonDisplay}
      </div>
    )
  }
}


export default App