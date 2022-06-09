import React, { useEffect, useState } from 'react'
import { getPokemonData, getPokemons } from './api'
import './App.css'
import NavBar from './components/NavBar'
import Pokedex from './components/Pokedex'
import Searchbar from './components/SearchBar'
import { FavoriteProvider } from './contexts/FavoriteContext'

function App() {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useState([])

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log('fetchPokemons error: ', error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  const updateFavoritePokemons = name => {
    const updateFavorites = []
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1)
    } else {
      updateFavorites.push(favoriteIndex, 1)
    }
    setFavorites(updateFavorites);
  } 

  return (
    <FavoriteProvider
      value={{
        favoritePokemon: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <div>
        <NavBar />
        <Searchbar />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </FavoriteProvider>
  )
}

export default App
