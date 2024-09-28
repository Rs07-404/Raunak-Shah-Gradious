import './App.css'
import Game from './components/Game/Game'
import Header from './components/Header/Header'
import { GameContextProvider } from './context/GameContext'

function App() {
  return (
    <div className='game'>
      <GameContextProvider>
      <Header />
        <div className="gameWindow">
          <Game />
        </div>
      </GameContextProvider>
    </div>
  )
}

export default App
