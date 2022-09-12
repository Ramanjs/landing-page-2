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
        <NavLink to="/" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"} ><li><a href="">Home</a></li></NavLink>
        <NavLink to="/events" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}><li><a href="">Events</a></li></NavLink>
        <NavLink to="/gallery" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}><li><a href="">Gallery</a></li></NavLink>
        <NavLink to="/cities" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}><li><a href="">Cities</a></li></NavLink>
        <NavLink to="/contact" onClick={() => setIsNavExpanded(!isNavExpanded)} className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}><li><a href="">Contact</a></li></NavLink>
      </ul>
    </div>
  )
};

export default Navbar;
