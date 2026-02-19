import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar'; 
import Cv from './Cv'; 
import Footbar from './Footbar';
import Experiences from './Experiences';
import Formation from './Formation';
import ProjetDetail from './projets/ProjetDetail';
import Projet from './projets/Projet';


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/experiences-professionnelle" element={<div ><Navbar /> <Experiences /><Footbar /></div>} />
            <Route path="/formation" element={<div ><Navbar /> <Formation /><Footbar /></div>} />
            <Route path="/projet" element={<div ><Navbar /> <Projet /><Footbar /></div>} />
           
           <Route path="/projet/:id" element={<div><Navbar /><ProjetDetail /><Footbar /></div>} />
            <Route path="*" element={
              <div >
                <Navbar />
                <h1 className='not-found' >Page introuvable</h1>
                <Footbar />
              </div>
            } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
      {/* Animation globale */}
      <div className="rain">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="raindrop"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
              height: `${10 + Math.random() * 10}px`,
            }}
          />
        ))}
      </div>

      <div className="snow">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${5 + Math.random() * 5}s`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
            }}
          />
        ))}
      </div>

      {/* Contenu du site */}
      <div className="site-content">
        {/* Ton Navbar, Routes, Footer, etc */}
      </div>
    </>
  );
}

export default App;
