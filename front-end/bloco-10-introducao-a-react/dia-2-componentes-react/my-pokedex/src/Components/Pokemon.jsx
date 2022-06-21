import React from "react";
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { id, name, type,  averageWeight: { value, measurementUnit }, image} = this.props.pokemon;
    return (
      // porque não consegui botar a key aqui? teve que ser lá no pokedex
      <div className="pokemon">
        <div className="pokemon-infos">
          <div class="name" key={id + name}>{name}</div>
          <div key={id + type}>type: {type}</div>
          <div key={id + value}>weight: {value} {measurementUnit}</div>
        </div>
        <img src={image} alt={name} key={id + image}/>
      </div>
    )
  }
}

export default Pokemon;