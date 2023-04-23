import {ReactComponent as Brand} from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return(
        <nav className="navbar">
            <div className="container">
            <div className="logo">
                <Brand />
            </div>
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
                </ul>
            </div>
            </div>
        </nav>
    )
}