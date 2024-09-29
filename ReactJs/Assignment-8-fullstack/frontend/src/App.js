import logo from './logo.svg';
import './App.css';
import Subscription from './Subscription';
import MySubscription from './MySubscription';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);
  function handleSubscriptionUpdate(){
    setRefresh(prev => !prev);
  }
  return (
    <div className='cards'>
    <Subscription onSubscriptionUpdate={handleSubscriptionUpdate}/>
    <MySubscription key={refresh} />
    </div>
  );
}

export default App;
