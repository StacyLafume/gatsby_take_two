
import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="container">
      <div className="innerHeader">
      <div className="logo">
        <Link to="/">Stacy Lafume</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/about">About Me</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      </div>
    </div>
  </header>
)

export default Header
