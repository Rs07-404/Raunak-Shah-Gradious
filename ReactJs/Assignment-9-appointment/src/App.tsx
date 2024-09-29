import React from 'react'
import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'
import { AppointmentContextProvider } from './context/AppointementContext'

function App() {

  return (
    <React.Fragment>
    <AppointmentContextProvider>
      <Form />
      <List />
    </AppointmentContextProvider>
    </React.Fragment>
  )
}

export default App
