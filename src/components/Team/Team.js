import './Team.css';
import radisson from '../../assets/radisson.png';
import puma from '../../assets/puma.png';
import bimbra from '../../assets/bimbra.png';
import r3naturals from '../../assets/r3natural.png';
import traveloholic from '../../assets/traveloholic.png';
import dashmesh from '../../assets/dashmesh.png';
import mmg from '../../assets/mmg.jpg';
import oraz from '../../assets/oraz.jpg';
import {useEffect, useState} from 'react';

const Team = () => {

  const [partners, setPartners] = useState([]) 
  const PROJECT_ID = "jqjakyhg";
  const DATASET = "production";

  useEffect(() => {
    let QUERY = encodeURIComponent('*[_type == "partners"]{ "imageUrl": partner_logo.asset->url, "name": partner_name }')
    fetch(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`)
      .then(res => res.json())
      .then(({ result }) => {
        setPartners(result.map(item => (
          {
            name: item.name,
            logo: item.imageUrl
          }
        )))
      })
  }, [])

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
