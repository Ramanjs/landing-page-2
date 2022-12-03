import './Gallery.css';
import {useEffect, useState} from 'react';

const GalleryPhotos = () => {
  const [photos, setPhotos] = useState([])

  const PROJECT_ID = "jqjakyhg";
  const DATASET = "production";

  useEffect(() => {
    let QUERY = encodeURIComponent('*[_type == "gallery"]{ "imageUrl": image.asset->url }')
    fetch(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`)
      .then(res => res.json())
      .then(({ result }) => {
        setPhotos(result.map(photo => photo.imageUrl))
      })
  }, [])

  return (
    <div className="container">
      <h1>Gallery</h1>
      {/*<Gallery photos={photos} />*/}
      <div className="gallery-images">
        {photos.map(photo => (
          <div className="gallery-img-container">
            <img src={photo} alt="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPhotos;
