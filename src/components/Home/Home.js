import './Home.css';
import homebg from '../../assets/home-bg.png';
import gotlogo from '../../assets/GoT Logo.png';
import Who from './Who';
import Chapters from './Chapters';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import wa from '../../assets/wa.png';

const Home = () => {
  return (
    <div>
      <div className="container home">
        <img src={gotlogo} alt="logo" className="got-logo" />
        <h1>We are the gang of thars!</h1>
        {/*<img src={homebg} alt="background" className="home-img" />*/}
      </div>
      <Who />
      <div className="container partners">
        <h2>Our Partners</h2>
        <p>We have partnered with multiple brands and companies to provide special discount and services to GoT members. Here’s a list of all the stores, companies and brands who have partnered with us:</p>
      </div>
      <Chapters />
      <div className="container home-footer">
        <p>Email: <a href="">gangofthars@gmail.com</a></p>
        <div className="socials-list">
          <img src={ig} alt="icon" />
          <img src={fb} alt="icon" />
          <img src={wa} alt="icon" />
        </div>
      </div>
    </div>
  )
};

export default Home;
