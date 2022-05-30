import React, {useEffect, useState} from 'react'
import { getPokemons } from './api'
import './App.css'
import NavBar from './components/NavBar'
import Pokedex from './components/Pokedex'
import Searchbar from './components/SearchBar'



function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemons();
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [])

  return (
    <div>
      <NavBar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  )
}

export default App
