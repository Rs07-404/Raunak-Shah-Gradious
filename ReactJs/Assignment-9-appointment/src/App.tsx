import React from 'react'
import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'
import { AppointmentContextProvider } from './context/AppointementContext'

function App() {

  return (
    <AppointmentContextProvider>
      <Form />
      <List />
    </AppointmentContextProvider>
  )
}

export default App
