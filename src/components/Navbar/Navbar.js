import './Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useMobile from '../../hooks/UseMobile';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const isMobile = useMobile();

  return (
    <div className="navbar">
      {/*<Link to="/"><img src={dazelogo} alt="logo" className="daze_logo"/></Link>*/}
      {isMobile ? <MenuIcon onClick={() => setIsNavExpanded(!isNavExpanded)} className="hamburger" /> : null}
      <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <li><NavLink to="/" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"} >Home</NavLink></li>
        <li><NavLink to="/events" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Events</NavLink></li>
        <li><NavLink to="/premium" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Premium</NavLink></li>
        <li><NavLink to="/gallery" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Gallery</NavLink></li>
        <li><NavLink to="/cities" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Cities</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Contact</NavLink></li>
      </ul>
    </div>
  )
};

export default Navbar;
