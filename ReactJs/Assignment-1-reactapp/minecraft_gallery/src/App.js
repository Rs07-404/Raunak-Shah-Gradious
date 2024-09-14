import './App.css';
import React from 'react';
import Gallery from './components/Gallery/Gallery.tsx';
import Header from './components/Header/Header.tsx';
import About from './components/About/About.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />}/>
          <Route path="/About" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
