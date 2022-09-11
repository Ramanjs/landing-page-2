import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" onClick={() => setIsNavExpanded(!isNavExpanded)}><li><a href="">Home</a></li></Link>
        <Link to="/work" onClick={() => setIsNavExpanded(!isNavExpanded)}><li><a href="">Events</a></li></Link>
        <Link to="/work" onClick={() => setIsNavExpanded(!isNavExpanded)}><li><a href="">Gallery</a></li></Link>
        <Link to="/work" onClick={() => setIsNavExpanded(!isNavExpanded)}><li><a href="">Cities</a></li></Link>
        <Link to="/team" onClick={() => setIsNavExpanded(!isNavExpanded)}><li><a href="">Contact</a></li></Link>
      </ul>
    </div>
  )
};

export default Navbar;
