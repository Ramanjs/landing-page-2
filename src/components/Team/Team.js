import './Team.css';
import radisson from '../../assets/radisson.png';
import puma from '../../assets/puma.png';
import bimbra from '../../assets/bimbra.png';
import r3naturals from '../../assets/r3natural.png';
import traveloholic from '../../assets/traveloholic.png';
import dashmesh from '../../assets/dashmesh.png';
import mmg from '../../assets/mmg.jpg';
import oraz from '../../assets/oraz.jpg';

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
      logo: dashmesh,
      name: 'Dashmesh Customs',
    },
    {
      logo: mmg,
      name: 'MMG',
    },
    {
      logo: oraz,
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
