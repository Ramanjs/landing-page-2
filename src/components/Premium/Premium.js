import './Premium.css';
import premiumbanner from '../../assets/GoT Premium Banner.png';
import premiumbannerMobile from '../../assets/got-premium-banner-mobile.png';
import useMobile from '../../hooks/UseMobile';

const Premium = () => {
  const isMobile = useMobile();

  return (
    <div className="container premium">
      <img src={isMobile ? premiumbannerMobile : premiumbanner} alt="premium banner" />
      <div className="premium-text">
        <p>Welcome to G.O.T Premium</p>
        <p>Members enrolled in G.O.T Premium can avail of discounts and offers from our Partner Hotels, Resorts, Pubs, Clubs, Restaurants, SPAs, Thar Accessory Shops, Brand Outlets, and much more across India.</p>

        <p>To add premium-ness for our G.OT. members, separate events and parties will be arranged for select members.</p>

        <p>Special offers and benefits can be availed through your G.O.T. Premium membership card.</p>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScHMgSygb9gBvoaQj7LKhnEXY8c0wBzE5-Tp5Xt__eOFyJQwA/viewform?usp=sf_link">Register for Premium</a>
    </div>
  )
}

export default Premium;
