import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import CardDetail from './components/CardDetail/CardDetail';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/card_details/:id' element={<CardDetail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
