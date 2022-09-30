import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Premium from './components/Premium/Premium';
import Chapters from './components/Home/Chapters';
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
        <Route path="/cities" element={<Chapters />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
