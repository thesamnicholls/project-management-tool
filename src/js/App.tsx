import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='o-main'>
        <div className='o-row'>
          <Switch>
            <Route
              exact
              path='/project-management-tool'
              component={Dashboard}
            />
            <Route
              exact
              path='/project-management-tool/project/:id'
              component={ProjectDetails}
            />
            <Route
              exact
              path='/project-management-tool/signin'
              component={SignIn}
            />
            <Route
              exact
              path='/project-management-tool/signup'
              component={SignUp}
            />
            <Route
              exact
              path='/project-management-tool/create'
              component={CreateProject}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
