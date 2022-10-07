import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, {useState, useEffect} from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav className="nav">
        <Link to="/" className="site-title items">
          Paradise 252
        </Link>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <CustomLink to="/home-guide" className="items">Home Guide</CustomLink>
          <CustomLink to="/grocery" className="items">Groceries</CustomLink>
          <CustomLink to="/dining-nightlife" className="items">Restaurants &amp; Nightlife</CustomLink>
          <CustomLink to="/activities" className="items">Activites</CustomLink>
          <CustomLink to="/about" className="items">About</CustomLink>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">Hamburger</button>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar