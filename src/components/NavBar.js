import react from 'react'

const NavBar = () => {
  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <div>
      <nav>
        <img
          alt = "pokeapi-logo"
          src= {logoImg}
          className="pokeLogo"
        />
      </nav>
    </div>
  )
}

export default NavBar
