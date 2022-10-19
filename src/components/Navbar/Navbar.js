import { useMatch, useResolvedPath } from "react-router-dom"
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
          <CustomLink href="/home-guide" className="items">Home Guide</CustomLink>
          <CustomLink href="/grocery" className="items">Groceries</CustomLink>
          {/* <CustomLink to="/dining-nightlife" className="items">Restaurants &amp; Nightlife</CustomLink> */}
          <CustomLink href="/activities" className="items">Activites</CustomLink>
          <CustomLink href="/about" className="items">About</CustomLink>
          <CustomLink href="/suggestions" className="items">Say Hey!</CustomLink>
        </ul>
      </div>
    </nav>
  );
  
  function CustomLink({ href, children, ...props }) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    )
  }
}

export default Navbar