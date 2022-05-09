import React, { useState } from 'react'

const Searchbar = (props) => {
  const { onSearch } = props
  const [search, setSearch] = useState('Ditto')
  const onChangeHandler = e => {
    setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
    onSearch(search)
  }

  return [
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokémon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  ]
}

export default Searchbar
