import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            {/* You can replace this with your actual logo */}
            <Link to="/">Corponizer</Link>
        </div>
        <ul className="navbar-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/recruitment">Recruitment</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar