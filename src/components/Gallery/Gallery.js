import './Gallery.css';
import a from '../../assets/gallery/12156877-dd81-4375-afee-3678bf6b134a.JPG';
import b from '../../assets/gallery/2acbe879-3e60-4e3d-a2a1-e5c54c57e092.JPG';
import c from '../../assets/gallery/300f7dd9-d3b6-41dc-b613-14a98b55c01c.jpg';
import d from '../../assets/gallery/5B7B8E91-AA0B-44F7-9C76-702DF5D0D136.jpg';
import e from '../../assets/gallery/6c3f72a1-be6e-47b1-9597-5295009a838d.JPG';
import f from '../../assets/gallery/fde48fdd-2567-4763-b796-c3f37db4271b.JPG';
import g from '../../assets/gallery/f8c534e0-4499-454f-9982-7854c29692fc.JPG';
import h from '../../assets/gallery/IMG_2592.JPG';
import i from '../../assets/gallery/IMG_2770.JPG';
import j from '../../assets/gallery/dd1ec5f0-1105-4c33-8d3b-61815e09fd91.jpg';
import k from '../../assets/gallery/a795e904-6cf1-4959-909a-95e7a147f9bc.jpg';

const GalleryPhotos = () => {
  const photos = [
    {
      src: a,
    },
    {
      src: b,
    },
    {
      src: c,
    },
    {
      src: d,
    },
    {
      src: e,
    },
    {
      src: f,
    },
    {
      src: g,
    },
    {
      src: h,
    },
    {
      src: i,
    },
    {
      src: j,
    },
    {
      src: k,
    },
  ];

  return (
    <div className="container">
      <h1>Gallery</h1>
      {/*<Gallery photos={photos} />*/}
      <div className="gallery-images">
        {photos.map(photo => (
          <div className="gallery-img-container">
            <img src={photo.src} alt="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPhotos;
