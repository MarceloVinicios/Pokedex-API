import React from 'react'

const Pokedex = props => {
  const { pokemons, loading } = props
  return [
    <div>
      <div className="pokedex-header">
        <h1>pokedex</h1>
        <div>Paginação:</div>
      </div>
      {loading ? (<div>Carregando, segura fera...</div>) : (
      <div className="pokedex-grid"></div>)}
    </div>
  ]
}

export default Pokedex
