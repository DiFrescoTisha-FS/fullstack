// import { GoogleLogin } from '@react-oauth/google';
import { NavLink } from 'react-router-dom'
import "../index.css";
import Login from "./Login"
// import GoogleSignIn from './GoogleSignIn'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <Login />
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar