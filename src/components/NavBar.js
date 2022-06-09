import React from 'react'

const NavBar = () => {
  const logoImg =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  return (
    <div>
      <nav>
        <img alt="pokeapi-logo" src={logoImg} className="pokeLogo" />
      </nav>
      <div>❤️</div>
    </div>
  )
}

export default NavBar
