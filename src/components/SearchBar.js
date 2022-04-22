import React, {useState} from 'react';


const Seachbar = () => {
  const [search, setSearch] = useState("Ditto")
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const onButtonClickHandler = () => {
    console.log("pokémon:", search)
  }

  return [
    <div className="seachbar-container">
      <div className="seachbar">
        <input placeholder="Buscar pokémon" onChange={onChangeHandler} /> 
      </div>
      <div className="seachbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  ]
}

export default Seachbar;