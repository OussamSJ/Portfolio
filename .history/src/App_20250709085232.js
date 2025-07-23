import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar'; // Si vous avez une barre de navigation
import Cv from './Cv'; // Si vous avez une page de CV
import Footbar from './Footbar';
import Experiences from './Experiences';
import Formation from './Formation';
import Projet from './Projet';
import Projet1 from './Projet1';
import Projet_Football_Player_Search from './Projet_Football_Player_Search';

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
            <Route path="/projet/1" element={<div ><Navbar /> <Projet1 /><Footbar /></div>} />
             <Route path="/projet/2" element={<div ><Navbar /> <Projet_Football_Player_Search /><Footbar /></div>} />
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
