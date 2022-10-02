import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Premium from './components/Premium/Premium';
import GalleryPhotos from './components/Gallery/Gallery';
import Chapters from './components/Home/Chapters';
import Contact from './components/Contact/Contact';
//import Footer from './components/Footer/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Form />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/gallery" element={<GalleryPhotos />} />
        <Route path="/cities" element={<Chapters />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
