import './Premium.css';
import premiumbanner from '../../assets/GoT Premium Banner.png';
import premiumbannerMobile from '../../assets/got-premium-banner-mobile.png';
import useMobile from '../../hooks/UseMobile';

const Premium = () => {
  const isMobile = useMobile();

  return (
    <div className="container premium">
      <img src={isMobile ? premiumbannerMobile : premiumbanner} alt="premium banner" />
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScHMgSygb9gBvoaQj7LKhnEXY8c0wBzE5-Tp5Xt__eOFyJQwA/viewform?usp=sf_link">Register for Premium</a>
    </div>
  )
}

export default Premium;
