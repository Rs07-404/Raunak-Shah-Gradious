import React from "react";
import './App.css';
import Card from './components/Card/Card.jsx';
import profiles from './profiles.json';

function App() {
  return (
    <div className="App">
      {profiles.map((profile) => <Card name={profile.name} profession={profile.profession} income={profile.income} location={profile.location} info={profile.info} profileImage={profile.profileImage} cvlink={profile.cvlink} status={profile.status} />)}
    </div>
  );
}

export default App;
