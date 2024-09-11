import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import EventList from './components/EventList/EventList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/events' element={<EventList/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
