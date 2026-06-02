import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/img/logo-timber.svg'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo" onClick={() => setOpen(false)}>
        <img src={logo} alt="Timbermasters" />
      </NavLink>

      <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
        <li><NavLink to="/collections" onClick={() => setOpen(false)}>OUR COLLECTIONS</NavLink></li>
        <li><a href="#" onClick={() => setOpen(false)}>THE MASTERS</a></li>
        <li><a href="#" onClick={() => setOpen(false)}>CONTACT US</a></li>
      </ul>

      <button
        className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
