import './Form.css';
import useMobile from '../../hooks/UseMobile';
import eventbanner from '../../assets/GoT Events Banner.png';
import eventbannermobile from '../../assets/got-events-banner-mobile.png';
import {useEffect, useState} from 'react';
import sanityClient from '../../sanity-client';

const Form = () => {

  const isMobile = useMobile();
  const [data, setData] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "event"] {
      image {
        asset -> {
          url,
          alt
        }
      },
      title,
      button_name,
      button_url
    }`)
      .then(res => {
        setData(res[0])
        console.log(res[0])
      })
  }, [])

  return (
    <>
      {data && <div className="container form">
        <div className="event-image-container">
          <img src={data.image.asset.url} alt="premium banner" />
        </div>
        <h1>{data.title}</h1>
        <a href={data.button_url}>{data.button_name}</a>
      </div>}
    </>
  )
}

export default Form;
