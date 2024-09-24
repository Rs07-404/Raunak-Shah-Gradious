import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount((count)=> count + 1);
  }

  function decrement(){
    setCount((count)=> (count - 1 < 0)? 0: count-1);
  }

  return (
    <>
    <div className="counter">counter: {count}</div>
    <div className="buttons">
    <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increment</button>
    </div>
    </>
  )
}

export default App
