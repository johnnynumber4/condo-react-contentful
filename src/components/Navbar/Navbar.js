

import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Paradise 252
      </Link>
      <ul>
        <CustomLink to="/home-guide">Home Guide</CustomLink>
        <CustomLink to="/grocery">Groceries</CustomLink>
        <CustomLink to="/dining-nightlife">Restaurants &amp; Nightlife</CustomLink>
        <CustomLink to="/activities">Activites</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
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