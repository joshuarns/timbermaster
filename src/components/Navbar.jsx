import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo-timber.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src={logo} alt="Timbermasters" />
      </NavLink>
      <ul className="navbar__links">
        <li><NavLink to="/collections">OUR COLLECTIONS</NavLink></li>
        <li><a href="#">THE MASTERS</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
    </nav>
  )
}
