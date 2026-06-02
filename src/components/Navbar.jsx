import logo from '../assets/img/logo-timber.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        <img src={logo} alt="Timbermasters" />
      </a>
      <ul className="navbar__links">
        <li><a href="#">FLOOR BOOK</a></li>
        <li><a href="#">THE MASTERS</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
    </nav>
  )
}
