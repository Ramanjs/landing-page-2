import './Contact.css';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import wa from '../../assets/wa.png';

const Contact = () => {
  return (
    <div className="container contact">
      <ul className="contact-list">
        <li>Call/Whatsapp to join: +919990020099</li>
        <li>Email: gangofthars@gmail.com</li>
        <li className="contact-socials-list">
          <span>Socials:</span>
          <div>
            <a href="https://www.instagram.com/gangofthars/"><img src={ig} alt="icon" /></a>
            <a href="https://www.facebook.com/groups/453577469243129/"><img src={fb} alt="icon" /></a>
            <a href="https://api.whatsapp.com/send?phone=919990020099&text=Hello%20Dr.%20Amarjit%2C%20I%20want%20to%20know%20more%20about%20GoT"><img src={wa} alt="icon" /></a>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default Contact;
