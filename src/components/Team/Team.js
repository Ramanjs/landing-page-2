import './Team.css';
import radisson from '../../assets/radisson.png';
import puma from '../../assets/puma.png';
import bimbra from '../../assets/bimbra.png';
import r3naturals from '../../assets/r3natural.png';
import traveloholic from '../../assets/traveloholic.png';

const Team = () => {

  const partners = [
    {
      logo: radisson, 
      name: 'Radisson Hotels',
    },
    {
      logo: puma, 
      name: 'Puma Cyber Hub',
    },
    {
      logo: bimbra, 
      name: 'Bimbra 4x4',
    },
    {
      logo: r3naturals, 
      name: 'R3 Naturals Spa',
    },
    {
      name: 'Dashmesh Customs',
    },
    {
      name: 'MMG',
    },
    {
      name: 'ORAZ',
    },
    {
      logo: traveloholic, 
      name: 'Travel-Oholic',
    },
  ];

  return (
    <div className="team">
     <div className="partners">
        <ul className="partners-list">
          {partners.map(partner => (
            <li className="partner">
              {partner.logo ? <img src={partner.logo} alt="" className="partner-logo" /> : null}
              <div className="partner-container">
                <span>{partner.name}</span>
             </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default Team;
