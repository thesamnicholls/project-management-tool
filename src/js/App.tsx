import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/project-management-tool' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
