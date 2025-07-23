import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar'; 
import Cv from './Cv'; 
import Footbar from './Footbar';
import Experiences from './Experiences';
import Formation from './Formation';
import Projet from './projets/Projet';
import Projet1 from './Projet1';
import ProjetFootballPlayerSearch from './ProjetFootballPlayerSearch'; 

function App() {
  return (
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
  );
}

export default App;
