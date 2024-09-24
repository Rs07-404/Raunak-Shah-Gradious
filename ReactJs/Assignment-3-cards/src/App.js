import React from "react";
import './App.css';
import Card from './components/Card/Card.jsx';
import profiles from './profiles.json';

function App() {
  return (
    <div className="App">
      {profiles.map((profile) => <Card profile={profile} />)}
    </div>
  );
}

export default App;
