import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Navbar from './Navbar'; // Si vous avez une barre de navigation
import Cv from './Cv'; // Si vous avez une page de CV
import Footbar from './Footbar';
import Experiences from './Experiences';
import Formations from './Formation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/experiences-professionnelle" element={<div ><Navbar/> <Experiences /><Footbar/></div>} />
            <Route path="/formations" element={<div ><Navbar/> <Formations /><Footbar/></div>} />
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
