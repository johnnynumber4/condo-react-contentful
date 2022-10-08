import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react'

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Paradise 252 at Atlantica II
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-6 h-6">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <CustomLink to="/home-guide" className="items">Home Guide</CustomLink>
          <CustomLink to="/grocery" className="items">Groceries</CustomLink>
          {/* <CustomLink to="/dining-nightlife" className="items">Restaurants &amp; Nightlife</CustomLink> */}
          <CustomLink to="/activities" className="items">Activites</CustomLink>
          <CustomLink to="/about" className="items">About</CustomLink>
        </ul>
      </div>
    </nav>
  );
  
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
}

export default Navbar