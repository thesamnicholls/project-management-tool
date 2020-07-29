import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/layout/Navigation'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}

export default App
