import React from "react";
import './Pokemon.css'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const { id, name, type,  averageWeight: { value, measurementUnit }, image} = this.props.pokemon;
    return (
      // porque não consegui botar a key aqui? teve que ser lá no pokedex
      <div className="pokemon">
        <div className="pokemon-infos">
          <div className="name" key={id + name}>{name}</div>
          <div key={id + type}>type: {type}</div>
          <div key={id + value}>weight: {value} {measurementUnit}</div>
        </div>
        <img src={image} alt={name} key={id + image}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.object
  }).isRequired,
}

export default Pokemon;