import './Chapters.css';

const Chapters = () => {
  return (
    <div className="container chapters">
      <h2>GOT Chapters</h2>
      <p><b>Gang of Thars</b> has multiple chapters spread accross multiple cities in India which include:</p>
      <ul className="chapter-list">
        <li className="chapter-point right-border"><p>GoT</p> <p>Delhi NCR</p></li>
        <li className="chapter-point right-border"><p>GoT</p> <p>CHD</p></li>
        <li className="chapter-point right-border"><p>GoT</p> <p>BLR</p></li>
        <li className="chapter-point"><p>GoT</p> <p>Mumbai</p></li>
        <li className="chapter-point right-border"><p>GoT</p> <p>Himachal</p></li>
        <li className="chapter-point right-border"><p>GoT</p> <p>Haryana</p></li>
        <li className="chapter-point right-border"><p>GoT</p> <p>Gujrat</p></li>
        <li className="chapter-point"><p>GoT</p> <p>UP</p></li>
      </ul>
      <p>CALL/WHATSAPP TO JOIN:</p>
      <p style={{marginTop: '0'}}><b>+919990020099</b></p>
    </div>
  )
};

export default Chapters;
