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
            <img src={ig} alt="icon" />
            <img src={fb} alt="icon" />
            <img src={wa} alt="icon" />
          </div>
        </li>
      </ul>
    </div>
  )
};

export default Contact;
