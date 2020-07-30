import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/project-management-tool' component={Dashboard} />
        <Route exact path='/project-management-tool/project/:id' component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
