import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'
import { store } from './redux/Store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Form />
      <List />
    </Provider>
  )
}

export default App
