import './Home.css';
import homebg from '../../assets/home-bg.png';
import gotlogo from '../../assets/GoT Logo.png';
import Who from './Who';
import Chapters from './Chapters';
import Team from '../Team/Team';
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
      <div className="container partners-container">
        <h2>Our Partners</h2>
        <p>We have partnered with multiple brands and companies to provide special discount and services to GoT members. Here’s a list of all the stores, companies and brands who have partnered with us:</p>
        <Team />
      </div>
      <Chapters />
      <div className="container home-footer">
        <p>Email: <a href="">gangofthars@gmail.com</a></p>
        <div className="socials-list">
          <a href="https://www.instagram.com/gangofthars/"><img src={ig} alt="icon" /></a>
          <a href="https://www.facebook.com/groups/453577469243129/"><img src={fb} alt="icon" /></a>
          <a href="https://api.whatsapp.com/send?phone=919990020099&text=Hello%20Dr.%20Amarjit%2C%20I%20want%20to%20know%20more%20about%20GoT"><img src={wa} alt="icon" /></a>
        </div>
      </div>
    </div>
  )
};

export default Home;
