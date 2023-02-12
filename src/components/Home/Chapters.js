import {useEffect} from 'react';
import {useState} from 'react';
import './Chapters.css';

const Chapters = () => {
  const [chapters, setChapters] = useState([])
  const [expand, setExpand] = useState(false)

  const PROJECT_ID = "jqjakyhg";
  const DATASET = "production";

  useEffect(() => {
    let QUERY = encodeURIComponent('*[_type == "chapters"] { chapter_name }')
    fetch(`https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`)
      .then(res => res.json())
      .then(({ result }) => {
        setChapters(result.map(chapter => chapter.chapter_name))
      })
  }, [])

  return (
    <div className="container chapters">
      <h2>GOT Chapters</h2>
      <p><b>Gang of Thars</b> has multiple chapters spread accross multiple cities in India which include:</p>
      <ul className="chapter-list">
        {chapters && chapters.slice(0, (expand ? chapters.length : 4)).map((chapter, index) => {
          const classname = (index % 4 == 3) ? "" : " border-rt"; 
          return (
            <li className={"chapter-point border-bt" + classname}><p>GoT</p> <p>{chapter}</p></li>
          )
        })}
      </ul>
      {!expand && <div className="load" onClick={() => setExpand(true)}>Load More</div>}
      <p>CALL/WHATSAPP TO JOIN:</p>
      <p style={{marginTop: '0'}}><b>+919990020099</b></p>
    </div>
  )
};

export default Chapters;
