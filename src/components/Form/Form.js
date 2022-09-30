import './Form.css';
import useMobile from '../../hooks/UseMobile';
import eventbanner from '../../assets/GoT Events Banner.png';
import eventbannermobile from '../../assets/got-events-banner-mobile.png';

const Form = () => {
  const isMobile = useMobile();
  return (
    <div className="container form">
      <img src={isMobile ? eventbannermobile : eventbanner} alt="premium banner" />
      <h1>World record event with 1000 thars</h1>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqJuCq5X77ztez6LR2ldpAbHIwgAqATnbO7PhK2Jrx54iEWQ/viewform?usp=sf_link">Register NOW</a>
    </div>
  )
}

export default Form;
