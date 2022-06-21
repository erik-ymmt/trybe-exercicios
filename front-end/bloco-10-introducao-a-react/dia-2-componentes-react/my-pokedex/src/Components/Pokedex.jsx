import pokemons from "../data";
import React from "react";
import Pokemon from "./Pokemon";
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    return (
      <>
      <h1>Pokedex</h1>
      <div className="pokedex">
        {pokemons.map((pokemonInfo) => <Pokemon pokemon={pokemonInfo} key={pokemonInfo.id}/>)}
      </div>
      </>
    );
  }
}

export default Pokedex;